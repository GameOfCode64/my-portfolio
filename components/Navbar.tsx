"use client";
import Link from "next/link";
import React, { useEffect } from "react";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/experience",
    label: "Experience",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav");
      if (window.scrollY > 0) {
        nav?.classList.add("backdrop-blur-3xl");
      } else {
        nav?.classList.remove("backdrop-blur-3xl");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed px-20 py-8 flex items-center z-40 justify-between h-[80px] bg-[#0000001f] shadow-md">
      <Link href="/">
        <h1 className="text-white font-bold text-[22px]">Game of Code</h1>
      </Link>
      <ul className="flex items-center justify-center space-x-5">
        {links.map((link) => (
          <li key={link.href} className="text-white font-semibold text-lg">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
