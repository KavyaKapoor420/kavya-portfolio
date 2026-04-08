"use client";

import Typewriter from "typewriter-effect";
import { hanken } from "@/public/font";

export default function TypeWritingEffect() {
  return (
    <div className="pl-0 sm:pl-16">
      <div
        className={`${hanken.className} min-h-8 text-base font-semibold text-red-500 sm:text-lg`}
      >
        <Typewriter
          options={{
            strings: [
              "Backend Developer",
              "ReactJs Frontend Developer",
              "Problem Solver",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      </div>
    </div>
  );
}
