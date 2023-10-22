"use client";

import { aboutSummary } from "@/data";
import { useRouter } from "next/navigation";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const About = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push("#contact");
  };

  return (
    <section
      id={"about"}
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-justify">
          <div className="text-3xl font-bold text-justify">
            <p>
              Welcome to my portfolio website! My name is Priyam and I am
              delighted to have you here.
            </p>
          </div>
          <div>
            <p>{aboutSummary}</p>
            <div>
              <button
                className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"
                onClick={handleClick}
              >
                Contact Me
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
