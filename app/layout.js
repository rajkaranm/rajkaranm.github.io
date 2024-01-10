import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rajkaran Mishra - Programmer, Hacker and Writer.",
  description:
    "Rajkaran Mishra is a programmer, hacker and writer. He writes about self-improvement.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />

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
