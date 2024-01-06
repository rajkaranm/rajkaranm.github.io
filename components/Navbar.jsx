"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div>
      <div className="w-full h-30 border-b p-5 flex flex-col justify-evenly items-center md:px-20 md:flex-row md:h-14">
        <Link href="/" className="">
          <h1 className="text-3xl py-5 font-bold ">
            Rajkaran Mishra.
          </h1>
        </Link>
        <div className="w-full flex justify-evenly flex-wrap md:w-1/2 md:flex md:justify-evenly md:text-[0.9rem] md:flex-row">
        <Link
          className="hover:underline p-2"
          href="https://medium.com/@imrajkaran"
        >
          ARTICLES
        </Link>
        <Link className="hover:underline p-2" href="/newsletter">
          NEWSLETTER
        </Link>
          <Link className="hover:underline p-2" href="#">
            CAREER
          </Link>
          <Link className="hover:underline p-2" href="#projects">
            PROJECTS
          </Link>
        </div>
      </div>
    </div>
  );
}
