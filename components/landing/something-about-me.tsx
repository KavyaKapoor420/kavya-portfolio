"use client";

import { AnimatePresence, motion } from "framer-motion";
import { gabarito, hanken } from "@/public/font";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { FaLinkedinIn } from "react-icons/fa";

const photos = [
  "/kavya.jpg",
  "/jj.webp",
  "/earnkit.webp",
  "/techtalkies.webp",
  "/referush.webp",
];

const stackPhotos = ["/docsmin.webp", "/puch.webp"];

export default function SomethingAboutMe() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const handlePrev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <section className="px-4" id="something-about-me">
      <div className="rounded-[36px] bg-white/90 px-6 py-10 text-black shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur-sm dark:bg-[#0f0f10]/90 dark:text-white dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p
              className={`${gabarito.className} text-4xl italic sm:text-6xl lg:text-7xl`}
            >
              Something About Me
            </p>
            <p
              className={`${hanken.className} mt-4 text-lg text-neutral-500 dark:text-neutral-400 sm:text-2xl`}
            >
              A little bit of bragging can be done right?
            </p>
          </div>

          <div className="mt-14 grid items-start gap-10 lg:grid-cols-[220px_minmax(0,1fr)_220px]">
            <div className="order-2 flex flex-col gap-6 lg:order-1">
              <div
                className={`${gabarito.className} text-3xl italic leading-[1.45] sm:text-4xl`}
              >
                <p>Built things.</p>
                <p>Led people.</p>
                <p>Showed up.</p>
              </div>

              <div className="w-full max-w-[220px] border-y border-neutral-300 py-5 dark:border-neutral-700">
                <Link
                  href="/Kavya_Kapoor_Resume.pdf"
                  target="_blank"
                  className={`${hanken.className} text-xl text-black transition hover:text-lightBlue dark:text-white dark:hover:text-lightBlue`}
                >
                  View Resume
                </Link>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="mb-8 text-center">
                <p
                  className={`${gabarito.className} text-3xl leading-tight sm:text-4xl lg:text-5xl`}
                >
                  I love building thoughtful products, solving hard problems,
                  and creating work that feels human.
                </p>
              </div>

              <div className="relative mx-auto flex max-w-4xl justify-center [perspective:1600px]">
                {stackPhotos.map((photo, stackIndex) => (
                  <div
                    key={photo}
                    className="pointer-events-none absolute top-0 hidden h-[430px] w-full max-w-[860px] rounded-[30px] shadow-[0_10px_40px_rgba(15,23,42,0.08)] lg:block dark:shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
                    style={{
                      transform: `translateY(${(stackIndex + 1) * -10}px) translateX(${(stackIndex + 1) * 32}px) rotate(${(stackIndex + 1) * 4}deg)`,
                      opacity: 0.4 - stackIndex * 0.12,
                      backgroundImage: `url(${photo})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}

                <div className="relative w-full max-w-[940px]">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={photos[index]}
                      custom={direction}
                      initial={{
                        opacity: 0,
                        rotateY: direction > 0 ? 70 : -70,
                        x: direction > 0 ? 80 : -80,
                        scale: 0.96,
                      }}
                      animate={{
                        opacity: 1,
                        rotateY: 0,
                        x: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        rotateY: direction > 0 ? -70 : 70,
                        x: direction > 0 ? -80 : 80,
                        scale: 0.96,
                      }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="relative overflow-hidden rounded-[30px] bg-[#cfe3fb] shadow-[0_20px_80px_rgba(15,23,42,0.12)] dark:bg-[#111827] dark:shadow-[0_20px_80px_rgba(0,0,0,0.35)]"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="relative aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[6/5]">
                        <Image
                          src={photos[index]}
                          alt="Something about Kavya"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black/80 bg-white/85 text-black backdrop-blur transition hover:scale-105 dark:border-white/80 dark:bg-black/65 dark:text-white"
                    aria-label="Previous image"
                  >
                    <IconArrowLeft size={28} />
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 z-20 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black/80 bg-white/85 text-black backdrop-blur transition hover:scale-105 dark:border-white/80 dark:bg-black/65 dark:text-white"
                    aria-label="Next image"
                  >
                    <IconArrowRight size={28} />
                  </button>
                </div>
              </div>
            </div>

            <div className="order-3 flex justify-start lg:justify-end">
              <Link
                href="https://www.linkedin.com/in/kavyakapoor420/"
                target="_blank"
                className="flex items-center gap-4 rounded-[22px] bg-neutral-100/90 px-4 py-3 shadow-sm transition hover:translate-y-[-2px] dark:bg-white/5"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-xl">
                  <Image
                    src="/kavya.jpg"
                    alt="Kavya LinkedIn"
                    fill
                    className="object-cover"
                  />
                </div>
                <p
                  className={`${hanken.className} text-2xl font-semibold text-black dark:text-white`}
                >
                  LinkedIn.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
