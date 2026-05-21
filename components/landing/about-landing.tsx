import { gabarito, hanken, manrope } from "@/public/font";
import Image from "next/image";
import Link from "next/link";
import {
  IconArrowBadgeRight,
  IconCalendarWeek,
  IconHeartHandshake,
  IconLicense,
} from "@tabler/icons-react";
import { ThemeToggleButton } from "../theme";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import TypeWritingEffect from "./typewriting-effect";

export default function AboutLanding() {
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

  return (
    <div className="flex flex-col gap-6 px-4" id="about">
      <Link
        href={"mailto:kavyakapoor412@gmail.com?subject=Portfolio%20Enquiry"}
        target="_blank"
        className="duration-500 flex w-fit items-center gap-x-2 rounded-full bg-black p-2 shadow-[inset_0_-4px_6px_rgba(255,255,255,0.5)] active:scale-75 dark:bg-white/90 dark:shadow-[inset_0_-4px_6px_rgba(0,0,0,0.45)] group"
      >
        <IconCalendarWeek size={16} className="text-white dark:text-black" />
        <p className={`${manrope.className} text-sm text-white/80 dark:text-black`}>
          Available
        </p>

        <IconArrowBadgeRight
          size={16}
          className="hidden text-white group-hover:block group-hover:animate-come dark:text-black"
        />
      </Link>

      <div className="flex flex-row flex-wrap-reverse items-center justify-between gap-y-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-start gap-x-4">
            <p
              className={`text-black dark:text-white text-2xl sm:text-3xl md:text-4xl ${gabarito.className} font-bold`}
            >
              Hi I&apos;m
            </p>
            <Image
              alt="me"
              aria-label="me"
              width={400}
              height={400}
              quality={80}
              loading="lazy"
              src="/kavya.jpg"
              className="size-12 -rotate-6 rounded-md ring-2 ring-white/90 shadow-md shadow-black dark:shadow-white/70 object-cover"
            />
            <p
              className={`text-2xl sm:text-3xl md:text-4xl ${gabarito.className} font-bold bg-gradient-to-r from-blue-400 to-lightBlue text-transparent bg-clip-text`}
            >
              Kavya Kapoor
            </p>
          </div>

          <TypeWritingEffect />
        </div>

        <div className="flex flex-row items-center gap-x-4 self-start sm:self-auto">
          <ThemeToggleButton />
        </div>
      </div>

      <p className={`${hanken.className} text-sm text-gray-500 dark:text-gray-400`}>
        I&apos;m a Computer Science student, backend-focused developer, and open
        source contributor who builds full-stack products, RAG applications,
        and accessible web experiences. My work spans REST APIs, JWT-based
        auth, MERN applications, and AI-powered systems, with hands-on
        experience from Haqdarshak, hackathons, and community-driven
        engineering projects.
      </p>

      <div className="flex flex-row flex-wrap items-center justify-between gap-y-6">
        <div className="flex flex-wrap gap-6">
          <Link
            href={"mailto:kavyakapoor412@gmail.com?subject=Work%20Enquiry"}
            className="flex w-fit items-center gap-2 rounded-lg bg-lightBlue p-2 px-4 text-sm text-white inset-shadow-sm inset-shadow-white/50 dark:bg-darkBlue dark:text-lightBlue dark:inset-shadow-white/20"
          >
            <IconHeartHandshake stroke={1} size={18} />
            <p className={`${hanken.className} font-bold`}>Work with me</p>
          </Link>

          <Link
            href="/Kavya_Kapoor_Resume.pdf"
            className="flex w-fit items-center gap-2 rounded-lg bg-lightBlue p-2 px-4 text-sm text-white inset-shadow-sm inset-shadow-white/50 dark:bg-darkBlue dark:text-lightBlue dark:inset-shadow-white/20"
            target="_blank"
            rel="noopener noreferre"
            download
          >
            <IconLicense stroke={1} size={18} />
            <p className={`${hanken.className} font-bold`}>Resume</p>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          {socials.map((e, i: number) => (
            <Link
              key={i}
              href={e.link}
              className="rounded-lg bg-gray-200 p-2 dark:bg-gray-900"
              target="_blank"
            >
              <e.icon className="size-4 text-black dark:text-white" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
