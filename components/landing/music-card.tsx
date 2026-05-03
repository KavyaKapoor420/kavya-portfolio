"use client";

import { gabarito, hanken } from "@/public/font";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
} from "@tabler/icons-react";
import { FaSpotify } from "react-icons/fa";

export default function MusicCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (!audioElement) return;

    const handleTimeUpdate = () => setCurrentTime(audioElement.currentTime);
    const handleLoadedMetadata = () => setDuration(audioElement.duration || 0);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audioElement.addEventListener("timeupdate", handleTimeUpdate);
    audioElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    audioElement.addEventListener("ended", handleEnded);

    return () => {
      audioElement.removeEventListener("timeupdate", handleTimeUpdate);
      audioElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audioElement.removeEventListener("ended", handleEnded);
    };
  }, []);

  function formatTime(time: number) {
    if (!Number.isFinite(time)) return "0:00";
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  }

  async function handleAudioPlayPause() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }
    await audioRef.current.play();
    setIsPlaying(true);
  }

  function handleSeek(value: string) {
    const seekTime = Number(value);
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  }

  return (
    <div className="px-4">
      <div className="overflow-hidden rounded-[34px] border border-neutral-700/70 bg-[#171717] text-white shadow-[0_20px_80px_rgba(0,0,0,0.28)]">
        <div className="flex flex-col gap-6 px-6 py-6 sm:px-12 sm:py-8">
          <div className="flex items-start justify-between gap-6">
            <div className="flex gap-6">
              <Image
                alt="Tum Prem Ho cover"
                src="https://i.scdn.co/image/ab67616d00001e02283dc1c25ba3030b0030f1bc"
                width={150}
                height={150}
                className="h-28 w-28 rounded-3xl object-cover"
              />

              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3">
                  <FaSpotify className="size-9 text-[#1ED760]" />
                  <p className={`${hanken.className} text-2xl text-[#8D8D8D]`}>
                    Last played
                  </p>
                </div>

                <p
                  className={`${gabarito.className} mt-2 text-3xl font-semibold sm:text-4xl`}
                >
                  Tum Prem Ho
                </p>
                <p
                  className={`${hanken.className} mt-1 text-2xl font-semibold text-[#1ED760]`}
                >
                  by Mohit Lalwani
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAudioPlayPause}
              className="flex h-[88px] w-[88px] shrink-0 items-center justify-center rounded-full border border-white/14 bg-white/6 text-white transition hover:bg-white/10"
              aria-label={isPlaying ? "Pause song" : "Play song"}
            >
              {isPlaying ? (
                <IconPlayerPauseFilled className="size-10 fill-current" />
              ) : (
                <IconPlayerPlayFilled className="ml-1 size-10 fill-current" />
              )}
            </button>
          </div>

          <div className={`${isPlaying ? "border-t border-white/8 pt-8" : "hidden"}`}>
            <div className="space-y-1">
              <p className={`${gabarito.className} text-3xl font-semibold`}>
                Tum Prem Ho
              </p>
              <p
                className={`${hanken.className} text-2xl font-semibold text-[#1ED760]`}
              >
                Mohit Lalwani
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 sm:gap-6">
              <span
                className={`${hanken.className} min-w-12 text-right text-2xl text-[#A5A5A5]`}
              >
                {formatTime(currentTime)}
              </span>

              <input
                type="range"
                min={0}
                max={duration || 0}
                step={1}
                value={currentTime}
                onChange={(event) => handleSeek(event.target.value)}
                className="music-slider h-2 w-full cursor-pointer appearance-none rounded-full bg-white/14"
              />

              <span
                className={`${hanken.className} min-w-12 text-2xl text-[#A5A5A5]`}
              >
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>

        <audio ref={audioRef} preload="metadata">
          <source src="/radha-krishna-song.mp3" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
      </div>
    </div>
  );
}
