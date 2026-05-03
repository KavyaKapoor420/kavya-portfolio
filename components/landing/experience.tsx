"use client";

import { gabarito, hanken } from "@/public/font";
import { useState } from "react";
import { motion } from "framer-motion";
import { IconBriefcase, IconCircleArrowRight } from "@tabler/icons-react";
import { experienceData } from "@/lib/constant";

interface dataType {
  company: string;
  about: string[];
  role: string;
  timeframe: string;
  image: string;
}

function highlightExperienceText(text: string) {
  const highlightedText = text
    .replace(
      "40,000+ women agents",
      `<span class="font-bold text-red-500"><span class="underline decoration-white underline-offset-4">40,000+ women</span> agents</span>`
    )
    .replace(
      "RESTful APIs",
      `<span class="font-bold text-red-500 underline decoration-white underline-offset-4">RESTful APIs</span>`
    )
    .replace(
      "JWT authentication",
      `<span class="font-bold text-red-500"><span class="underline decoration-white underline-offset-4">JWT</span> authentication</span>`
    )
    .replace(
      "admin moderation dashboard that reduced content quality issues by 30%",
      `<span>admin moderation dashboard that reduced content quality</span><span class="font-bold text-red-500"> issues by 30%</span>`
    )
    .replace(
      "multilingual conversational RAG chatbot",
      `<span class="font-bold text-red-500">multilingual conversational <span class="underline decoration-white underline-offset-4">RAG</span> chatbot</span>`
    )
    .replace(
      "ChromaDB for vector retrieval",
      `<span class="font-bold text-red-500">ChromaDB for vector retrieval</span>`
    );

  return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
}

export default function Experience() {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="experience" className="flex flex-col gap-6">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
      >
        Experience
      </p>

      <div className="flex w-full flex-col items-start justify-start gap-6 sm:gap-8 md:gap-12">
        {experienceData.map((e: dataType, i: number) => {
          const isOpen = openedIndex === i;

          return (
            <div className="flex w-full flex-row items-start gap-x-2 px-4" key={i}>
              <div>
                <IconBriefcase
                  size={36}
                  className="rounded-lg border border-neutral-200 p-2 text-black dark:border-neutral-800 dark:text-white"
                />
              </div>

              <div className="flex w-full cursor-pointer flex-col gap-4 sm:gap-0">
                <div
                  className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                  onClick={() => toggleIndex(i)}
                >
                  <div className="flex items-center gap-2">
                    <div>
                      <div className="flex gap-4 items-center">
                        <p
                          className={`${gabarito.className} text-xl text-black dark:text-white`}
                        >
                          {e.company}
                        </p>

                        <IconCircleArrowRight
                          size={24}
                          className={`text-gray-500 ${isOpen ? "rotate-90" : ""}`}
                        />
                      </div>
                      <p
                        className={`${hanken.className} text-sm font-medium text-gray-500`}
                      >
                        {e.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex place-self-end gap-2 sm:place-self-start sm:items-center">
                    <p
                      className={`${hanken.className} text-sm font-medium text-gray-500`}
                    >
                      {e.timeframe}
                    </p>
                  </div>
                </div>

                <motion.ul
                  initial={{
                    y: 20,
                    opacity: 0,
                    filter: "blur(10px)",
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 0.15,
                    delay: 0,
                    type: "tween",
                  }}
                  className={`mx-auto w-full duration-500 ${
                    isOpen ? "mt-4 flex list-disc flex-col gap-4" : "hidden"
                  }`}
                >
                  {e.about.map((text: string, j: number) => (
                    <li
                      key={j}
                      className={`${hanken.className} text-sm font-medium leading-7 text-gray-700 dark:text-gray-300`}
                    >
                      {highlightExperienceText(text)}
                    </li>
                  ))}
                </motion.ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
