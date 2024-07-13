import React from "react";
import HeroContent from "@/components/HeroContent";
const Background = () => {
  return (
    <div className="relative w-full h-full flex flex-col ">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full top-0 left-0 z-[1] opacity-[0.6] object-cover"
      >
        <source src="/bg.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Background;
