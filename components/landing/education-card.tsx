import { educationData } from "@/lib/constant";
import { gabarito, hanken } from "@/public/font";
import Image from "next/image";
import Link from "next/link";
import {
  IconCalendarWeek,
  IconMail,
  IconMapPin,
  IconSchool,
} from "@tabler/icons-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function EducationCard() {
  return (
    <div className="flex flex-col gap-6" id="education">
      <p
        className={`${gabarito.className} text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
      >
        Education
      </p>

      <div className="mx-4 rounded-[32px] border border-neutral-300 bg-[#151515] p-6 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.04)] dark:border-neutral-800 sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <Image
              alt="profile"
              src="/kavya.jpg"
              width={160}
              height={160}
              className="h-28 w-28 rounded-2xl object-cover ring-1 ring-white/10"
            />

            <div className="flex flex-col gap-4">
              <div>
                <p
                  className={`${gabarito.className} text-2xl font-bold sm:text-4xl`}
                >
                  {educationData.college}
                </p>
                <p className={`${hanken.className} mt-2 text-lg text-zinc-300`}>
                  {educationData.degree}
                </p>
              </div>

              <div className="flex flex-col gap-3 text-zinc-300">
                <div className="flex items-center gap-3">
                  <IconSchool size={22} />
                  <p className={`${hanken.className} text-base`}>
                    {educationData.timeframe}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IconMapPin size={22} />
                  <p className={`${hanken.className} text-base`}>
                    {educationData.location}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <IconMail size={22} />
                  <p className={`${hanken.className} text-base`}>
                    kavyakapoor412@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 self-start">
            <Link
              href="https://github.com/kavyakapoor420"
              target="_blank"
              className="rounded-2xl border border-white/10 p-4 text-white transition hover:bg-white/5"
            >
              <FaGithub className="size-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/kavyakapoor420/"
              target="_blank"
              className="rounded-2xl border border-white/10 p-4 text-white transition hover:bg-white/5"
            >
              <FaLinkedinIn className="size-6" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3 text-zinc-300">
          <IconCalendarWeek size={22} />
          <p className={`${hanken.className} text-base`}>
            Focused on building real-world software through internships,
            projects, open source, and hackathons.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {educationData.about.map((item) => (
            <p
              key={item}
              className={`${hanken.className} text-base leading-7 text-zinc-300`}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
