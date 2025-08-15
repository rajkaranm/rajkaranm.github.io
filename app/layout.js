'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import 'aos/dist/aos.css'; // Import AOS styles globally
import Aos from 'aos';
import { useContext, useEffect } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from './layout.module.css';

const inter = Inter({ subsets: ["latin"] });

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
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Poppins:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
            <div className={styles.layout}>
                <Sidebar />
                <main className={styles.main_content}>
                    {children}
                </main>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
