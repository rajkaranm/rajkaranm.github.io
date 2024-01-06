"use client";
import { useEffect } from "react";
import { useThemeContext } from "@/context/store";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  const { theme } = useThemeContext();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    // Root class for text color toggle
    <div className="">
      <Navbar /> 
      {/* Short About us || Landing Page */}
      <div className="px-10 w-full h-[40rem] flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-7xl pb-3 font-bold">Hi, I'm Rajkaran</h1>
        <p className="text-2xl text-center pb-8 md:w-[47rem] md:text-3xl mt-5 mb-10">
          I have build many Full Stack Application from Blockchain to
          E-commerce, I Also have a lot interest Cyber Security.
        </p>
        <div className="flex flex-col md:flex-row">
          <Link
            className="m-3 py-3 px-5 border-2 rounded-3xl bg-[--dark-bg] text-white dark:bg-white dark:text-black"
            href="https://medium.com/@imrajkaran"
          >
            Read My Articles
          </Link>
          <Link
            className="m-3 py-3 px-5 border-2 rounded-3xl bg-[--dark-bg] text-white dark:bg-white dark:text-black"
            href="#projects"
          >
            View My Projects
          </Link>
        </div>
      </div>
      <Divider />
      {/* Skills Section */}
      <Skills />
      <Divider />
      {/* Projects Section */}
      <Projects />
      <Divider />
      <Footer />
    </div>
  );
}
