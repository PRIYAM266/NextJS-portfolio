import React from "react";
import Box from "./Box";
import { skills } from "@/data";

const Skills = () => {
  return (
    <section
      id={"skills"}
      className="w-full h-[var(--doc-height)] bg-dark-blue text-gray-300"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full items-center md:items-start">
        <div className="items-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600">
            Skills
          </p>
          <p className="py-4">
            Here are some of the skills, tools, and technologies that I have
            experience working with:
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-2">
          {skills.map((skill) => (
            <Box
              src={`/assets/${skill.img}.png`}
              alt={`${skill.img} icon`}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
