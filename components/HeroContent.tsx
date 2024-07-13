"use client";

import Image from "next/image";
import React from "react";
import hand from "@/public/waving-hand.png";
import TypewriterComponent from "typewriter-effect";
import Link from "next/link";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";

const HeroContent = () => {
  return (
    <div className="w-full h-full z-20 px-20 mt-48 text-white">
      <div className="flex items-center  space-x-4">
        <div className="w-[40px] h-[40px]">
          <Image src={hand} alt="hand" className="w-full h-full" />
        </div>
        <p className="text-[32px] mt-2">Hey</p>
      </div>
      <h1 className="font-extrabold text-[65px] mt-4">
        I&apos;m Bhavishya Tripathi
      </h1>
      <div className="flex items-center space-x-2 text-[30px]">
        <p> I&apos;m into</p>
        <span className=" text-[#745ae7]">
          <TypewriterComponent
            options={{
              strings: [
                "Frontend Development.",
                "Backend Development.",
                "App Development.",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>
      <p className="max-w-xl font-medium mt-8">
        I focus on developing user-friendly web applications that meet the
        client&apos;s requirements, with attention to detail, scalability, and
        performance.
      </p>
      <Link href="">
        <Button className="mt-8 flex items-center justify-start bg-[#745ae7] hover:bg-[#745ae7]/80 ">
          About Me
          <ChevronRight
            className="ml-1 hover:translate-x-[5px] ease-linear"
            size={17}
          />
        </Button>
      </Link>
    </div>
  );
};

export default HeroContent;
