"use client";

import { heroSummary } from "@/data";
import { useRouter } from "next/navigation";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "./Button";

const Hero = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("#work");
  };

  return (
    <section id={"hero"} className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          PRIYAM
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] text-justify">
          {heroSummary}
        </p>
        <div>
          <Button handleClick={handleClick} title="View work" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
