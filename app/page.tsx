import AboutLanding from "@/components/landing/about-landing";
import EducationCard from "@/components/landing/education-card";
import Experience from "@/components/landing/experience";
import HomeProjects from "@/components/landing/home-project";
import MusicCard from "@/components/landing/music-card";
import { gabarito } from "@/public/font";
import GhActivityCard from "gh-activity-card/components/gh-activity-card";
import Skills from "@/components/landing/skiils";
import { GridBackground } from "@/components/ui/GridBackground";


export default function Home() {
  return (
    <GridBackground className="pt-12">
      <div className="mx-auto flex flex-col gap-18 mb-24">

        <AboutLanding />
        <Experience />
        <MusicCard />
        <HomeProjects />
        <Skills />
        <div className="flex flex-col gap-6 ">
          <p
            className={`${gabarito.className} text-2xl text-black dark:text-white font-semibold bg-gray-200 dark:bg-titleBg p-2 border-l-8 border-black dark:border-gray-200`}
          >
            Github Contribution
          </p>
          <GhActivityCard
            username="kavyakapoor420"
            className="text-black dark:text-white"
          />
        </div>
        <EducationCard />
      </div>
    </GridBackground>
  );
}
