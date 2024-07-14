import Image from "next/image";
import bg from "@/public/my_love_com.png";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="w-full px-20 mt-20">
      <h1 className="text-white text-3xl text-center">About Me</h1>
      <div className="mt-12 grid md:grid-cols-2 grid-cols-1">
        <div className="h-[400px] w-[350px]">
          <Image src={bg} alt="img" className="w-full h-full rounded-3xl" />
        </div>
        <div className="py-12">
          <h1 className="text-white font-[700] text-2xl">Bhavishya Tripathi</h1>
          <p className="text-[#6d28d9]  px-1 mt-3">Full Stack Developer</p>
          <p className=" font-medium font-memo text-[14px] text-white mt-4 px-1">
            Hey there! 🌟 I&apos;m a Full-Stack Developer hailing from the
            vibrant city of Delhi, India. With a solid foundation in Information
            Technology, I&apos;ve been diving into the world of web development
            since my early college days. 💻 I specialize in creating dynamic and
            intuitive websites and applications, always striving for that
            perfect balance of aesthetics and functionality. When I&apos;m not
            coding up a storm, you&apos;ll find me working on exciting
            full-stack projects and innovative side gigs. 🚀 Passionate about
            tech and always eager to learn more, I&apos;m on a continuous
            journey to bring my digital ideas to life. 🌐
          </p>
          <div className="flex mt-4 items-center space-x-6">
            <Link href="">
              <Button className="bg-[#6d28d9] hover:bg-[#6d28d9]/90">
                Resume
              </Button>
            </Link>
            <Link href="">
              <p className="text-[#6d28d9] flex items-center justify-normal">
                Book a 1:1 call <ExternalLink className="ml-2" size={17} />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
