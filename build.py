#!/usr/bin/env python3
"""
Single-file, zero-dependency Markdown-to-Static compiler for rajkaranm.github.io.
Crafted Minimal Architecture: sub-30KB pages, zero client JS, clean directory URLs, RSS 2.0 feed.
"""

import os
import re
import json
import html
from datetime import datetime, timezone
from pathlib import Path

ROOT_DIR = Path(__file__).parent.resolve()
CONTENT_DIR = ROOT_DIR / "content"
TEMPLATES_DIR = ROOT_DIR / "templates"
CSS_DIR = ROOT_DIR / "css"
ASSETS_DIR = ROOT_DIR / "assets"

def parse_frontmatter(raw_text):
    """Parse YAML-style frontmatter from markdown content."""
    meta = {}
    body = raw_text
    
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)$', raw_text, re.DOTALL)
    if match:
        frontmatter_text = match.group(1)
        body = match.group(2)
        for line in frontmatter_text.splitlines():
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            if ':' in line:
                key, val = line.split(':', 1)
                key = key.strip()
                val = val.strip().strip('"').strip("'")
                meta[key] = val
    return meta, body.strip()

def escape_html(text):
    return html.escape(text, quote=False)

def markdown_to_html(md):
    """
    Robust, dependency-free Markdown to Semantic HTML parser.
    Handles code blocks, inline code, headers, blockquotes, lists, images, links, formatting.
    """
    code_blocks = {}
    code_counter = 0

    def code_block_sub(match):
        nonlocal code_counter
        lang = match.group(1) or ""
        code = match.group(2)
        placeholder = f"__CODEBLOCK_{code_counter}__"
        code_counter += 1
        escaped_code = html.escape(code)
        lang_class = f' class="language-{lang}"' if lang else ""
        code_blocks[placeholder] = f'<pre><code{lang_class}>{escaped_code}</code></pre>'
        return placeholder

    # 1. Extract and preserve fenced code blocks
    md = re.sub(r'```([a-zA-Z0-9_-]*)\n(.*?)```', code_block_sub, md, flags=re.DOTALL)

    # 2. Extract inline code
    inline_code = {}
    inline_counter = 0

    def inline_code_sub(match):
        nonlocal inline_counter
        code = match.group(1)
        placeholder = f"__INLINECODE_{inline_counter}__"
        inline_counter += 1
        inline_code[placeholder] = f'<code>{html.escape(code)}</code>'
        return placeholder

    md = re.sub(r'`([^`\n]+)`', inline_code_sub, md)

    # 3. Block-level parsing
    blocks = re.split(r'\n\s*\n', md)
    html_blocks = []

    for block in blocks:
        block = block.strip()
        if not block:
            continue

        # Code block placeholder check
        if block in code_blocks:
            html_blocks.append(code_blocks[block])
            continue

        placeholder_match = re.match(r'^(__CODEBLOCK_\d+__)$', block)
        if placeholder_match:
            html_blocks.append(code_blocks[placeholder_match.group(1)])
            continue

        # Horizontal rule
        if re.match(r'^(?:---|\*\*\*|___)$', block):
            html_blocks.append('<hr>')
            continue

        # Headings
        heading_match = re.match(r'^(#{1,6})\s+(.*)$', block)
        if heading_match:
            level = len(heading_match.group(1))
            heading_text = render_inline(heading_match.group(2), inline_code)
            html_blocks.append(f'<h{level}>{heading_text}</h{level}>')
            continue

        # Blockquote
        if block.startswith('>'):
            quote_lines = []
            for line in block.splitlines():
                if line.startswith('>'):
                    quote_lines.append(line[1:].strip())
                else:
                    quote_lines.append(line.strip())
            quote_text = render_inline(' '.join(quote_lines), inline_code)
            html_blocks.append(f'<blockquote><p>{quote_text}</p></blockquote>')
            continue

        # Unordered list
        if re.match(r'^[*-]\s+', block):
            items = []
            current_item = []
            for line in block.splitlines():
                item_match = re.match(r'^[*-]\s+(.*)$', line)
                if item_match:
                    if current_item:
                        items.append(' '.join(current_item))
                    current_item = [item_match.group(1).strip()]
                else:
                    current_item.append(line.strip())
            if current_item:
                items.append(' '.join(current_item))
            
            li_html = ''.join(f'<li>{render_inline(item, inline_code)}</li>' for item in items)
            html_blocks.append(f'<ul>{li_html}</ul>')
            continue

        # Ordered list
        if re.match(r'^\d+\.\s+', block):
            items = []
            current_item = []
            for line in block.splitlines():
                item_match = re.match(r'^\d+\.\s+(.*)$', line)
                if item_match:
                    if current_item:
                        items.append(' '.join(current_item))
                    current_item = [item_match.group(1).strip()]
                else:
                    current_item.append(line.strip())
            if current_item:
                items.append(' '.join(current_item))
            
            li_html = ''.join(f'<li>{render_inline(item, inline_code)}</li>' for item in items)
            html_blocks.append(f'<ol>{li_html}</ol>')
            continue

        # Paragraph (default)
        p_text = render_inline(block.replace('\n', ' '), inline_code)
        html_blocks.append(f'<p>{p_text}</p>')

    output = '\n\n'.join(html_blocks)

    # Restore any remaining code block placeholders
    for placeholder, code_html in code_blocks.items():
        output = output.replace(placeholder, code_html)

    return output

def render_inline(text, inline_code_map):
    """Renders inline markdown: images, links, bold, italics, code."""
    # Linked image: [![alt](img_url)](link_url)
    text = re.sub(
        r'\[!\[([^\]]*)\]\(([^)]+)\)\]\(([^)]+)\)',
        r'<a href="\3" target="_blank" rel="noopener noreferrer"><img src="\2" alt="\1" loading="lazy"></a>',
        text
    )

    # Standalone image: ![alt](url)
    text = re.sub(
        r'!\[([^\]]*)\]\(([^)]+)\)',
        r'<img src="\2" alt="\1" loading="lazy">',
        text
    )

    # Hyperlinks: [text](url)
    def link_sub(match):
        label = match.group(1)
        url = match.group(2)
        external = ' target="_blank" rel="noopener noreferrer"' if url.startswith('http') else ''
        return f'<a href="{url}"{external}>{label}</a>'

    text = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', link_sub, text)

    # Bold: **text** or __text__
    text = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'__([^_]+)__', r'<strong>\1</strong>', text)

    # Italics: *text* or _text_
    text = re.sub(r'\*([^*]+)\*', r'<em>\1</em>', text)
    text = re.sub(r'(?<![a-zA-Z0-9])_([^_]+)_(?![a-zA-Z0-9])', r'<em>\1</em>', text)

    # Restore inline code placeholders
    for placeholder, code_html in inline_code_map.items():
        text = text.replace(placeholder, code_html)

    return text

def format_date(date_str):
    """Format YYYY-MM-DD into readable date e.g. 'Jan 19, 2024'."""
    try:
        dt = datetime.strptime(date_str.strip(), "%Y-%m-%d")
        return dt.strftime("%b %d, %Y")
    except Exception:
        return date_str

def format_rfc822_date(date_str):
    """Format YYYY-MM-DD into RFC 822 date for RSS feeds."""
    try:
        dt = datetime.strptime(date_str.strip(), "%Y-%m-%d")
        return dt.strftime("%a, %d %b %Y 00:00:00 GMT")
    except Exception:
        return date_str

def calculate_reading_time(text):
    """Estimate reading time based on 200 words/min."""
    words = len(re.findall(r'\w+', text))
    return max(1, (words + 199) // 200)

def render_template(template_str, context):
    """Simple, clean template engine with conditional blocks."""
    def if_sub(match):
        key = match.group(1)
        inner = match.group(2)
        if context.get(key):
            return inner
        return ""

    result = re.sub(r'\{\{#if_([a-zA-Z0-9_]+)\}\}(.*?)\{\{/if_\1\}\}', if_sub, template_str, flags=re.DOTALL)

    for k, v in context.items():
        result = result.replace(f"{{{{{k}}}}}", str(v))
    return result

def load_posts(section_dir, category_name):
    """Load all markdown posts from a content subdirectory."""
    posts = []
    if not section_dir.exists():
        return posts

    for file_path in section_dir.glob("*.md"):
        with open(file_path, "r", encoding="utf-8") as f:
            raw_text = f.read()
        meta, body = parse_frontmatter(raw_text)
        slug = file_path.stem
        date_iso = meta.get("date", "2024-01-01")
        title = meta.get("title", slug.replace("-", " ").title())
        summary = meta.get("summary", "")
        reading_time = calculate_reading_time(body)
        
        posts.append({
            "slug": slug,
            "title": title,
            "date_iso": date_iso,
            "date_formatted": format_date(date_iso),
            "summary": summary,
            "category": category_name,
            "body": body,
            "reading_time": reading_time,
            "file_path": file_path
        })

    posts.sort(key=lambda p: p["date_iso"], reverse=True)
    return posts

def build_post_row(post, section_url_prefix):
    """Build a post row for tabular archives and lists."""
    return f"""<div class="post-row">
  <span class="post-date">{post['date_formatted']}</span>
  <a href="{section_url_prefix}{post['slug']}/" class="post-title-link">{post['title']}</a>
</div>"""

def build_project_item(proj):
    """Build a project card item."""
    tags_html = "".join(f'<span class="project-tag">[{t}]</span> ' for t in proj.get("tags", []))
    url = proj.get("url") or proj.get("github") or ""
    if url and url != "#":
        name_html = f'<a href="{url}" class="project-name" target="_blank" rel="noopener noreferrer">{proj["name"]}</a>'
    else:
        name_html = f'<span class="project-name">{proj["name"]}</span>'
    return f"""<div class="project-item">
  <div class="project-header">
    {name_html}
    <div class="project-tags">{tags_html.strip()}</div>
  </div>
  <p class="project-description">{proj['description']}</p>
</div>"""

def generate_rss_feed(tech_posts, personal_posts, output_path):
    """Generate a standard RSS 2.0 feed combining all articles."""
    all_posts = []
    for p in tech_posts:
        all_posts.append({
            "title": p["title"],
            "link": f"https://rajkaran.blog/tech/{p['slug']}/",
            "pub_date": format_rfc822_date(p["date_iso"]),
            "date_iso": p["date_iso"],
            "summary": p["summary"] or p["title"],
            "category": "Tech"
        })
    for p in personal_posts:
        all_posts.append({
            "title": p["title"],
            "link": f"https://rajkaran.blog/personal/{p['slug']}/",
            "pub_date": format_rfc822_date(p["date_iso"]),
            "date_iso": p["date_iso"],
            "summary": p["summary"] or p["title"],
            "category": "Personal"
        })
    all_posts.sort(key=lambda x: x["date_iso"], reverse=True)

    items_xml = []
    for p in all_posts:
        item = f"""    <item>
      <title>{html.escape(p['title'])}</title>
      <link>{p['link']}</link>
      <guid isPermaLink="true">{p['link']}</guid>
      <pubDate>{p['pub_date']}</pubDate>
      <description>{html.escape(p['summary'])}</description>
      <category>{p['category']}</category>
    </item>"""
        items_xml.append(item)

    items_block = "\n".join(items_xml)
    now_utc = datetime.now(timezone.utc).strftime("%a, %d %b %Y %H:%M:%S GMT")

    feed_xml = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rajkaran Mishra</title>
    <link>https://rajkaran.blog/</link>
    <description>Technical deep-dives, systems engineering, and essays on focus and software craft.</description>
    <language>en-us</language>
    <lastBuildDate>{now_utc}</lastBuildDate>
    <atom:link href="https://rajkaran.blog/feed.xml" rel="self" type="application/rss+xml"/>
{items_block}
  </channel>
</rss>
"""
    with open(output_path, "w", encoding="utf-8") as f:
        f.write(feed_xml.strip() + "\n")
    size_kb = output_path.stat().st_size / 1024
    print(f"Generated: {output_path.relative_to(ROOT_DIR)} ({size_kb:.1f} KB)")

def write_page(dest_path, html_content):
    """Write static file ensuring directories exist."""
    dest_path.parent.mkdir(parents=True, exist_ok=True)
    with open(dest_path, "w", encoding="utf-8") as f:
        f.write(html_content)
    size_kb = dest_path.stat().st_size / 1024
    print(f"Generated: {dest_path.relative_to(ROOT_DIR)} ({size_kb:.1f} KB)")
    return size_kb

def main():
    print("=" * 60)
    print("Building rajkaranm.github.io (Crafted Minimal Architecture)")
    print("=" * 60)

    # 1. Load Templates
    with open(TEMPLATES_DIR / "base.html", "r", encoding="utf-8") as f:
        base_tmpl = f.read()
    with open(TEMPLATES_DIR / "home.html", "r", encoding="utf-8") as f:
        home_tmpl = f.read()
    with open(TEMPLATES_DIR / "archive.html", "r", encoding="utf-8") as f:
        archive_tmpl = f.read()
    with open(TEMPLATES_DIR / "post.html", "r", encoding="utf-8") as f:
        post_tmpl = f.read()
    with open(TEMPLATES_DIR / "now.html", "r", encoding="utf-8") as f:
        now_tmpl = f.read()

    # 2. Load Content
    with open(CONTENT_DIR / "projects.json", "r", encoding="utf-8") as f:
        projects_data = json.load(f)

    tech_posts = load_posts(CONTENT_DIR / "tech", "Tech")
    personal_posts = load_posts(CONTENT_DIR / "personal", "Personal")

    current_year = datetime.now().year
    common_ctx = {
        "current_year": current_year,
        "nav_home": "",
        "nav_tech": "",
        "nav_personal": "",
        "nav_now": "",
        "canonical_url": "https://rajkaran.blog/",
        "og_type": "website",
    }

    # 3. Build Homepage (index.html)
    projects_html = "\n".join(build_project_item(p) for p in projects_data)
    recent_tech_html = "\n".join(build_post_row(p, "/tech/") for p in tech_posts[:4])
    recent_personal_html = "\n".join(build_post_row(p, "/personal/") for p in personal_posts[:4])

    home_content = render_template(home_tmpl, {
        "projects_list": projects_html,
        "tech_posts_list": recent_tech_html,
        "personal_posts_list": recent_personal_html
    })

    home_full = render_template(base_tmpl, {
        **common_ctx,
        "title": "Rajkaran Mishra — AI-Powered Systems Engineer & Writer",
        "description": "Personal website, low-latency financial systems, enterprise automation, and engineering notes on focus and software craft.",
        "canonical_url": "https://rajkaran.blog/",
        "nav_home": "active",
        "content": home_content
    })
    write_page(ROOT_DIR / "index.html", home_full)

    # 4. Build Tech Archive (/tech/index.html)
    all_tech_html = "\n".join(build_post_row(p, "/tech/") for p in tech_posts)
    tech_archive_content = render_template(archive_tmpl, {
        "archive_label": "// Technical Writing",
        "archive_title": "Technical Writing",
        "archive_intro": "Deep-dives into systems engineering, performance trade-offs, architecture, and programming paradigms.",
        "posts_list": all_tech_html
    })
    tech_archive_full = render_template(base_tmpl, {
        **common_ctx,
        "title": "Technical Writing — Rajkaran Mishra",
        "description": "Technical essays and engineering notes on systems, architecture, and software design.",
        "canonical_url": "https://rajkaran.blog/tech/",
        "nav_tech": "active",
        "content": tech_archive_content
    })
    write_page(ROOT_DIR / "tech" / "index.html", tech_archive_full)

    # 5. Build Individual Tech Posts (/tech/<slug>/index.html)
    for post in tech_posts:
        article_html = markdown_to_html(post["body"])
        post_content = render_template(post_tmpl, {
            "back_url": "/tech/",
            "back_label": "/tech/",
            "date_iso": post["date_iso"],
            "date_formatted": post["date_formatted"],
            "reading_time": post["reading_time"],
            "category": post["category"],
            "post_title": post["title"],
            "summary": post["summary"],
            "if_summary": bool(post["summary"]),
            "article_content": article_html
        })
        post_full = render_template(base_tmpl, {
            **common_ctx,
            "title": f"{post['title']} — Rajkaran Mishra",
            "description": post["summary"] or f"Read {post['title']} by Rajkaran Mishra.",
            "canonical_url": f"https://rajkaran.blog/tech/{post['slug']}/",
            "og_type": "article",
            "nav_tech": "active",
            "content": post_content
        })
        write_page(ROOT_DIR / "tech" / post["slug"] / "index.html", post_full)

    # 6. Build Personal Archive (/personal/index.html)
    all_personal_html = "\n".join(build_post_row(p, "/personal/") for p in personal_posts)
    personal_archive_content = render_template(archive_tmpl, {
        "archive_label": "// Personal Essays",
        "archive_title": "Personal Essays",
        "archive_intro": "Notes on deep work, habits, reading, philosophy, and reflections on life and focus.",
        "posts_list": all_personal_html
    })
    personal_archive_full = render_template(base_tmpl, {
        **common_ctx,
        "title": "Personal Essays — Rajkaran Mishra",
        "description": "Essays and reflections on productivity, reading, journaling, and intentional focus.",
        "canonical_url": "https://rajkaran.blog/personal/",
        "nav_personal": "active",
        "content": personal_archive_content
    })
    write_page(ROOT_DIR / "personal" / "index.html", personal_archive_full)

    # 7. Build Individual Personal Posts (/personal/<slug>/index.html)
    for post in personal_posts:
        article_html = markdown_to_html(post["body"])
        post_content = render_template(post_tmpl, {
            "back_url": "/personal/",
            "back_label": "/personal/",
            "date_iso": post["date_iso"],
            "date_formatted": post["date_formatted"],
            "reading_time": post["reading_time"],
            "category": post["category"],
            "post_title": post["title"],
            "summary": post["summary"],
            "if_summary": bool(post["summary"]),
            "article_content": article_html
        })
        post_full = render_template(base_tmpl, {
            **common_ctx,
            "title": f"{post['title']} — Rajkaran Mishra",
            "description": post["summary"] or f"Read {post['title']} by Rajkaran Mishra.",
            "canonical_url": f"https://rajkaran.blog/personal/{post['slug']}/",
            "og_type": "article",
            "nav_personal": "active",
            "content": post_content
        })
        write_page(ROOT_DIR / "personal" / post["slug"] / "index.html", post_full)

    # 8. Build Now Page (/now/index.html)
    with open(CONTENT_DIR / "now.md", "r", encoding="utf-8") as f:
        now_raw = f.read()
    now_meta, now_body = parse_frontmatter(now_raw)
    now_body_html = markdown_to_html(now_body)
    now_date = now_meta.get("date", "2026-10-01")

    now_content = render_template(now_tmpl, {
        "now_content": now_body_html,
        "last_updated": format_date(now_date)
    })
    now_full = render_template(base_tmpl, {
        **common_ctx,
        "title": "Now — Rajkaran Mishra",
        "description": "What I'm currently working on, reading, and exploring.",
        "canonical_url": "https://rajkaran.blog/now/",
        "nav_now": "active",
        "content": now_content
    })
    write_page(ROOT_DIR / "now" / "index.html", now_full)

    # 9. Generate RSS Feed (/feed.xml)
    generate_rss_feed(tech_posts, personal_posts, ROOT_DIR / "feed.xml")

    print("=" * 60)
    print("Build complete! All pages and RSS feed successfully generated.")
    print("=" * 60)

if __name__ == "__main__":
    main()
