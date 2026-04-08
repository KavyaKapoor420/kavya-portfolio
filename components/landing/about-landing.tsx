"use client";

import { gabarito, hanken, manrope } from "@/public/font";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import {
  IconArrowBadgeRight,
  IconCalendarWeek,
  IconHeartHandshake,
  IconLicense,
  IconMusic,
  IconMusicOff,
} from "@tabler/icons-react";
import { ThemeToggleButton } from "../theme";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function AboutLanding() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const socials = [
    {
      link: "tel:+919717926088",
      icon: MdPhone,
    },
    {
      link: "mailto:kavyakapoor412@gmail.com",
      icon: MdEmail,
    },
    {
      link: "https://github.com/kavyakapoor420",
      icon: FaGithub,
    },

    {
      link: "https://www.linkedin.com/in/kavyakapoor420/",
      icon: FaLinkedinIn,
    },
  ];

  function handleAudioPlayPause() {
    if (!audioRef) return;
    if (isPlaying) {
      //@ts-expect-error not explained
      audioRef.current?.pause();
      setIsPlaying(false);
      return;
    } //@ts-expect-error not explained
    audioRef.current?.play();
    setIsPlaying(true);
  }

  return (
    <div className="flex flex-col gap-6 px-4" id="about">
      <Link
        href={"mailto:kavyakapoor412@gmail.com?subject=Portfolio%20Enquiry"}
        target="_blank"
        className=" duration-500 flex gap-x-2 items-center  w-fit  p-2 rounded-full bg-black dark:bg-white/90 shadow-[inset_0_-4px_6px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_-4px_6px_rgba(0,0,0,0.45)] group active:scale-75"
      >
        <IconCalendarWeek size={16} className="text-white dark:text-black" />
        <p
          className={`${manrope.className} text-sm text-white/80 dark:text-black  `}
        >
          Available
        </p>

        <IconArrowBadgeRight
          size={16}
          className="text-white dark:text-black hidden group-hover:block group-hover:animate-come"
        />
      </Link>

      <div className="flex flex-row flex-wrap-reverse gap-y-4 justify-between items-center ">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-start gap-x-4">
            <p
              className={` text-black dark:text-white text-2xl sm:text-3xl md:text-4xl ${gabarito.className} font-bold`}
            >
              I&apos;m
            </p>
            <Image
              alt="me"
              aria-label="me"
              width={500}
              height={500}
              src={"/x.webp"}
              className="size-12 rounded-md ring-2 ring-white/90 shadow-md shadow-black dark:shadow-white/70 -rotate-6"
            />
            <p
              className={`text-2xl sm:text-3xl md:text-4xl ${gabarito.className} font-bold bg-gradient-to-r from-blue-400 to-lightBlue text-transparent bg-clip-text`}
            >
              Kavya Kapoor
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-x-4 ">
          <div
            className="cursor-pointer border border-neutral-200 dark:border-neutral-700 rounded-md p-2 m-auto group duration-200 z-[999] bg-white dark:bg-black inset-shadow-sm inset-shadow-black/20 dark:inset-shadow-white/50"
            onClick={handleAudioPlayPause}
          >
            {!isPlaying ? (
              <IconMusicOff className="text-black dark:text-white size-4 sm:size-6" />
            ) : (
              <IconMusic className="text-black dark:text-white size-4 sm:size-6" />
            )}
          </div>

          <ThemeToggleButton />

          <audio loop ref={audioRef} className="hidden">
            <source src="/audio.mp3" type="audio/mpeg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </div>
      <p
        className={`${hanken.className} text-sm text-gray-500 dark:text-gray-400`}
      >
        I&apos;m a Computer Science student, backend-focused developer, and open
        source contributor who builds full-stack products, RAG applications,
        and accessible web experiences. My work spans REST APIs, JWT-based
        auth, MERN applications, and AI-powered systems, with hands-on
        experience from Haqdarshak, hackathons, and community-driven
        engineering projects.
      </p>

      <div className="flex flex-row flex-wrap justify-between items-center gap-y-6">
        <div className="flex flex-wrap gap-6">
          <Link
            href={"mailto:kavyakapoor412@gmail.com?subject=Work%20Enquiry"}
            className="flex gap-2  px-4 items-center bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue  p-2 w-fit text-sm rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20 "
          >
            <IconHeartHandshake stroke={1} size={18} />
            <p className={`${hanken.className} font-bold`}>Work with me </p>
          </Link>

          <Link
            href={"/Kavya_Kapoor_Resume.pdf"}
            className="flex gap-2  px-4 items-center  p-2 w-fit bg-lightBlue dark:bg-darkBlue text-white dark:text-lightBlue text-sm rounded-lg inset-shadow-sm inset-shadow-white/50  dark:inset-shadow-white/20 "
            target="_blank"
            rel="noopener noreferre"
            download
          >
            <IconLicense stroke={1} size={18} />
            <p className={`${hanken.className} font-bold`}>Resume</p>
          </Link>
        </div>

        <div className="flex gap-4 items-center ">
          {socials.map((e, i: number) => {
            return (
              <Link
                key={i}
                href={e.link}
                className="bg-gray-200 dark:bg-gray-900 p-2 rounded-lg"
                target="_blank"
              >
                <e.icon className="size-4 text-black dark:text-white  " />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
