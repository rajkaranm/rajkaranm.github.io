import { ThemeProvider } from "@/context/ThemeContext";
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css" />

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://rajkaran.blog" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta
          property="og:title"
          content="Rajkaran Mishra - Programmer, Hacker, Writer."
        />
        <meta property="og:url" content="https://rajkaran.blog" />
        <meta property="og:site_name" content="Rajkaran Mishra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RealRajkaran" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
