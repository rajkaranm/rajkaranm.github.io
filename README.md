# rajkaranm.github.io

Personal website, portfolio, and dual-section blog for **Rajkaran Mishra**.

Rebuilt with the **Crafted Minimal** architecture:
* **Zero Client-Side JavaScript:** 0 KB hydration, 0 trackers, 0 runtimes.
* **Ultra-Fast Payload:** Total uncompressed page weight under 30 KB per page.
* **System Typography:** Native system fonts with monospace accents and hairline borders.
* **Zero-Dependency Pipeline:** Single-file Python 3 compiler (`build.py`) with zero third-party packages.

---

## Architecture

```text
rajkaranm.github.io/
├── content/
│   ├── tech/                 # Technical essays & systems architecture
│   ├── personal/             # Philosophy, book notes, reflections
│   ├── now.md                # /now page content
│   ├── projects.json         # Showcase project metadata
│   └── extracted_manifest.json
├── templates/                # Semantic HTML templates
│   ├── base.html
│   ├── home.html
│   ├── archive.html
│   ├── post.html
│   └── now.html
├── css/
│   └── style.css             # Unified stylesheet (< 8 KB, dark mode support)
├── assets/                   # Static images, favicon
└── build.py                  # Zero-dependency static compiler
```

---

## Writing a New Post

Create a new Markdown file in either `content/tech/<slug>.md` or `content/personal/<slug>.md`:

```markdown
---
title: "Title of the Post"
date: "YYYY-MM-DD"
summary: "1-2 sentence description of the essay."
---

Your post content in standard markdown...
```

---

## Local Development & Compilation

### 1. Compile the Site
Run the zero-dependency compiler:
```bash
python3 build.py
```

### 2. Preview Locally
Start a local HTTP server:
```bash
python3 -m http.server 4001
```

Visit:
* Homepage: `http://localhost:4001/`
* Technical Writing: `http://localhost:4001/tech/`
* Personal Essays: `http://localhost:4001/personal/`
* Now Page: `http://localhost:4001/now/`

---

## Deployment

Pushes to the `master` branch trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which automatically executes `python3 build.py` and publishes the static directory root directly to GitHub Pages.

---

## Architecture & Operations Guide

For complete details on compiler mechanics, design tokens, step-by-step update workflows, and AI coding assistant rules, see [`context.md`](context.md).
