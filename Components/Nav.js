"use client";
import React, { useState } from "react";
import Image from "next/image";
import Home from "@/app/Home/page";
import About from "@/app/About/page";
import Projects from "@/app/Projects/page";
import Blog from "@/app/Blog/page";
import Contact from "@/app/Contact/page";
import Service from "@/app/Service/page";
import { Link } from "react-scroll";
const Nav = () => {
  const [fix, setfix] = useState(false);
  function setfixed() {
    if (window.scrollY >= 100) {
      setfix(true);
    } else {
      setfix(false);
    }
  }
  window.addEventListener("scroll", setfixed);
  return (
    <nav
      className={
        fix
          ? "h-[12vh] w-[100vw] px-[10vw] border-b-2 shadow-md cursor-pointer flex items-center justify-between bg-white text-black fixed z-10"
          : "h-[12vh] w-[100vw] px-[10vw] cursor-pointer flex items-center justify-between fixed text-white z-10"
      }
    >
      <div className="h-[10vh] w-[13vw] flex items-center justify-between">
        <Image
          src="https://img.freepik.com/free-vector/vector-graphic-design-element-r-letter_460848-6937.jpg?w=740&t=st=1702671447~exp=1702672047~hmac=68db6485ccc36c364c8c7d7e56e9eb033a77cee2c8e1d4370df725b82fa3f7cf"
          className="h-[2.5vw] w-[2.5vw] rounded-full object-position:top mt-2"
          width={100}
          height={100}
          alt="logo"
        />
        <h1 className="font-semibold text-3xl mt-2">PortFolio</h1>
      </div>
      <div className="w-[50vw] h-[10vh] flex items-center justify-between text-lg font-semibold mt-2">
        <Link
          to="home"
          smooth={true}
          duration={500}
          className="hover:text-[#EB4F0C] "
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="hover:text-[#EB4F0C] "
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="hover:text-[#EB4F0C] "
        >
          Projects
        </Link>
        <Link
          to="service"
          smooth={true}
          duration={500}
          className="hover:text-[#EB4F0C] "
        >
          Service
        </Link>
        <Link
          to="blog"
          smooth={true}
          duration={500}
          className="hover:text-[#EB4F0C] "
        >
          Blog
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="hover:text-[#EB4F0C] "
        >
          Contact
        </Link>
        <button className="px-4 py-2 rounded-3xl text-white font-bold bg-[#EB4F0C] hover:bg-[#1F46FD]">
          Download CV
        </button>
      </div>
    </nav>
  );
};

export default Nav;
