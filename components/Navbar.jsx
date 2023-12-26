"use client";
import { useState } from "react";
import Link from "next/link";
import { BsToggleOn } from "react-icons/bs";
import { useThemeContext } from "@/context/store";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

export default function Navbar() {
  const { theme, handleThemeSwitch } = useThemeContext();
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div>
      {!menuToggle ? (
        <>
          <div className="w-full min-h-16 border-b px-1 md:px-20 md:flex-row flex flex-row justify-between items-center">
            <h1 className="text-3xl flex-none font-bold">Rajkaran Mishra</h1>
            <div className="relative hidden top-14 right-10 md:flex md:flex-1 md:justify-evenly md:static md:flex-row"> 
              <Link className="hover:underline" href="#skills">
                Skills
              </Link>
              <Link className="hover:underline" href="#">
                Career
              </Link>
              <Link className="hover:underline" href="#projects">
                Project
              </Link>
              <Link
                className="hover:underline"
                href="https://medium.com/@imrajkaran"
              >
                Article
              </Link>
              <Link
                className="hover:underline"
                href="https://rajkaran.substack.com/"
              >
                Newsletter
              </Link>
            </div>
            <div className="w-20 flex justify-evenly">
              <button onClick={() => handleThemeSwitch()}>
                {theme === "dark" ? (
                  <BsToggleOn title="Light mode" size={30} />
                ) : (
                  <BsToggleOn
                    title="Dark mode"
                    size={30}
                    className="rotate-180"
                  />
                )}
              </button>
              <button
                onClick={() => setMenuToggle(!menuToggle)}
                className="md:hidden"
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="pt-3 h-52 w-full border-b px-1 md:px-20 md:flex-row flex flex-row items-start">
            <h1 className="text-3xl flex-none font-bold">Rajkaran Mishra</h1>
            <div className="relative top-14 right-10 flex flex-col flex-1 justify-evenly md:static">
              <Link className="hover:underline" href="#skills">
                Skills
              </Link>
              <Link className="hover:underline" href="#">
                Career
              </Link>
              <Link className="hover:underline" href="#projects">
                Project
              </Link>
              <Link
                className="hover:underline"
                href="https://medium.com/@imrajkaran"
              >
                Article
              </Link>
              <Link
                className="hover:underline"
                href="https://rajkaran.substack.com/"
              >
                Newsletter
              </Link>
            </div>
            <div className="w-20 flex justify-evenly">
              <button onClick={() => handleThemeSwitch()}>
                {theme === "dark" ? (
                  <BsToggleOn title="Light mode" size={30} />
                ) : (
                  <BsToggleOn
                    title="Dark mode"
                    size={30}
                    className="rotate-180"
                  />
                )}
              </button>
              <button
                onClick={() => setMenuToggle(!menuToggle)}
                className="md:hidden"
              >
                <RxCross2 />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
