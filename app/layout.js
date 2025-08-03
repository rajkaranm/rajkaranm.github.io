'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css'; // Import AOS styles globally
import Aos from 'aos';
import { useContext, useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeContext from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

function RootLayoutContent({ children }) {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">

        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://rajkaran.blog" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rajkaran Mishra - Programmer, Hacker, Writer."
        />
        <meta property="og:url" content="https://rajkaran.blog" />
        <meta property="og:site_name" content="Rajkaran Mishra" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@RealRajkaran" />
        <link
          href="https://fonts.googleapis.com/css2?family=Long+Cang&family=Lora:wght@700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </ThemeProvider>
  );
}
