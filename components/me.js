import React from "react";
import Avatar from "./avatar";
import Logan from "../assets/Logan-Keene.jpeg";
import Image from "next/image";

const Me = () => {
  return (
    <div className="pt-10 pb-20 flex justify-between w-full">
      <div className="w-2/3">
        <h1 className="font-extrabold text-6xl pb-1">
          Hey, I'm{" "}
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-cyan-400 to-blue-400 via-sky-400 hover:hue-rotate-60 transition duration-500">
            Logan
          </span>
          .{" "}
        </h1>
        <p className='text-xl tracking-wide font-light'>I am a <span className='bg-gradient-to-br bg-clip-text text-transparent from-cyan-400 to-blue-400 via-sky-400 hover:hue-rotate-60 transition duration-500'>frontend web developer</span> that uses tools like <span className='bg-gradient-to-br bg-clip-text text-transparent from-cyan-400 to-blue-400 via-sky-400 hover:hue-rotate-60 transition duration-500'>React</span> and <span className='bg-gradient-to-br bg-clip-text text-transparent from-cyan-400 to-blue-400 via-sky-400 hover:hue-rotate-60 transition duration-500'>Tailwind</span> to construct clean, functional web applications.</p>
      </div>
      <div className="w-1/3 inline-flex items-start justify-end shrink-0">
        <Image
          src={Logan}
          alt="Logan Keene"
          className="rounded-full flex shrink-0 w-[128px] h-[]"
          height={128}
          width={128}
        />
      </div>
    </div>
  );
};

export default Me;
