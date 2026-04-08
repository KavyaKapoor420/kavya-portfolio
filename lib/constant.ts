import { DiRedis } from "react-icons/di";
import { RiBearSmileFill } from "react-icons/ri";
import {
  IconBrandMongodb,
  IconBrandNodejs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandTypescript,
} from "@tabler/icons-react";
import {
  SiBootstrap,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPassport,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactquery,
  SiReactrouter,
  SiRecoil,
  SiSocketdotio,
  SiTailwindcss,
  SiTrpc,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import {
  GitMergeIcon,
  Home04Icon,
  Note01Icon,
  RacingFlagIcon,
  VisualStudioCodeIcon,
} from "@hugeicons/core-free-icons";
import { IconSvgElement } from "@hugeicons/react";

export const skills = [
  {
    title: "C",
    icon: SiJavascript,
  },
  {
    title: "C++",
    icon: SiTypescript,
  },
  {
    title: "JavaScript",
    icon: SiJavascript,
  },
  {
    title: "SQL",
    icon: SiMysql,
  },
  {
    title: "ReactJS",
    icon: SiReact,
  },
  {
    title: "NodeJS",
    icon: SiNodedotjs,
  },
  {
    title: "ExpressJS",
    icon: SiExpress,
  },
  {
    title: "TailwindCSS",
    icon: SiTailwindcss,
  },
  {
    title: "Material UI",
    icon: SiReactquery,
  },
  {
    title: "MySQL",
    icon: SiPostgresql,
  },
  {
    title: "MongoDB",
    icon: SiMongodb,
  },
  {
    title: "REST APIs",
    icon: SiSocketdotio,
  },
  {
    title: "JWT",
    icon: DiRedis,
  },
  {
    title: "DSA",
    icon: SiTailwindcss,
  },
  {
    title: "OOP",
    icon: SiBootstrap,
  },
  {
    title: "DBMS",
    icon: SiReactrouter,
  },
  {
    title: "System Design",
    icon: SiTrpc,
  },
  {
    title: "MERN Stack",
    icon: SiRecoil,
  },
  {
    title: "Leadership",
    icon: SiPrisma,
  },
  {
    title: "Event Management",
    icon: RiBearSmileFill,
  },
  {
    title: "Public Speaking",
    icon: SiGit,
  },
  {
    title: "Strategic Thinking",
    icon: SiZod,
  },
  {
    title: "Passport.js",
    icon: SiPassport,
  },
];

export const navLinks: navLinksType[] = [
  {
    name: "Home",
    icon: Home04Icon,
    icon2: Home04Icon,
    link: "/",
    value: "/",
  },
  {
    name: "Project",
    icon: VisualStudioCodeIcon,
    icon2: VisualStudioCodeIcon,
    link: "/projects",
    value: "/projects",
  },
  {
    name: "OS",
    icon: GitMergeIcon,
    icon2: GitMergeIcon,
    link: "/contributions",
    value: "/contributions",
  },
  {
    name: "Blog",
    icon: Note01Icon,
    icon2: Note01Icon,
    link: "/blog",
    value: "/blog",
  },
  {
    name: "Hackathon",
    icon: RacingFlagIcon,
    icon2: RacingFlagIcon,
    link: "/hackathon",
    value: "/hackathon",
  },
];

export interface navLinksType {
  name: string;
  icon: IconSvgElement;
  icon2: IconSvgElement;
  link: string;
  value: tabType;
}
export type tabType =
  | "/"
  | "/projects"
  | "/contributions"
  | "/blog"
  | "/hackathon";

export const allProjects = [
  {
    name: "QueryAtlas",
    description:
      "Multi-document RAG platform with hybrid retrieval that combines BM25 keyword search and semantic embeddings, supports simultaneous multi-PDF uploads, and lets users tune retrieval weights for better search accuracy.",
    deployed: "query-atlas-rag-kavya-kapoor-projec.vercel.app/",
    github: "https://github.com/kavyakapoor420",
    tech: [
      IconBrandReact,
      IconBrandTypescript,
      IconBrandTailwind,
      IconBrandNodejs,
      IconBrandMongodb,
    ],
    image: "/jj.webp",
    category: "RAG",
  },
  {
    name: "Documind",
    description:
      "AI-powered PDF assistant built with a React and TypeScript frontend plus a Python and Flask-style backend flow. It chunks uploaded PDFs, generates embeddings, stores vectors for semantic search, and enables document Q&A and summarization.",
    deployed: "github.com/kavyakapoor420/Documind-Rag-Project-Langchain",
    github: "https://github.com/kavyakapoor420/Documind-Rag-Project-Langchain",
    tech: [
      IconBrandReact,
      IconBrandTypescript,
      IconBrandTailwind,
      SiExpress,
      SiGit,
    ],
    image: "/earnkit.webp",
    category: "AI",
  },
  {
    name: "BetterWeb",
    description:
      "AI-driven accessibility Chrome extension built to personalize browsing for users with ADHD, dyslexia, sensory sensitivities, visual impairments, and related cognitive conditions through adaptive visual, voice, and sensory-overload controls.",
    deployed: "gtbit-hack-mvp.vercel.app/",
    github: "https://github.com/kavyakapoor420/WebEase-project",
    tech: [SiJavascript, SiReact, IconBrandTailwind, SiGit],
    image: "/yuga.webp",
    category: "Accessibility",
  },
  {
    name: "URL Shortener",
    description:
      "Streamlined full-stack utility for creating, managing, and tracking shortened URLs efficiently with a clean dashboard workflow and secure backend support.",
    deployed: "github.com/kavyakapoor420/url-shortener",
    github: "https://github.com/kavyakapoor420/url-shortener",
    tech: [
      IconBrandReact,
      IconBrandNodejs,
      SiExpress,
      IconBrandMongodb,
      IconBrandTailwind,
    ],
    image: "/logofy.webp",
    category: "Utility",
  },
  {
    name: "Wanderlust",
    description:
      "Airbnb-style listing and review platform with secure Passport.js authentication, seamless CRUD flows for listings and reviews, and Cloudinary-powered image handling for a smooth hosting experience.",
    deployed: "wonderlust-by34.onrender.com/listings",
    github: "https://github.com/kavyakapoor420/Wanderlust",
    tech: [
      IconBrandNodejs,
      SiExpress,
      IconBrandMongodb,
      SiBootstrap,
      SiPassport,
    ],
    image: "/referush.webp",
    category: "Full Stack",
  },
  {
    name: "StudyNotion",
    description:
      "MERN-based ed-tech platform with separate student and instructor flows, Razorpay payments, JWT and Bcrypt authentication, Cloudinary media handling, and responsive React plus Redux experiences for course management and learning.",
    deployed: "github.com/kavyakapoor420/StudyNotion",
    github: "https://github.com/kavyakapoor420/StudyNotion",
    tech: [
      IconBrandReact,
      IconBrandNodejs,
      SiExpress,
      IconBrandMongodb,
      IconBrandTailwind,
    ],
    image: "/techtalkies.webp",
    category: "MERN",
  },
];

export const contriubutionData = [
  {
    organisation: "Kestra",
    logo: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.3698267942851394.jpg",
    organisation_github: "https://github.com/kestra-io/kestra",
    contribution: [
      {
        title: "fix(core): make password requirement descriptive",
        link: "https://github.com/kestra-io/kestra/pull/13483",
      },
    ],
  },
  {
    organisation: "Apache Beam Fork",
    logo: "https://www.toornify.com/sanity_esports_logo.jpg",
    organisation_github: "https://github.com/kavyakapoor420/AacheBugFix",
    contribution: [
      {
        title: "Fix: Extract gauge metrics in addMetricResult method",
        link: "https://github.com/kavyakapoor420/AacheBugFix/pull/1",
      },
    ],
  },
  {
    organisation: "OpenClimateFix",
    logo: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.3698267942851394.jpg",
    organisation_github: "https://github.com/openclimatefix/uk-pv-national-gsp-api",
    contribution: [
      {
        title: "Refactor get_start_datetime and related logic",
        link: "https://github.com/openclimatefix/uk-pv-national-gsp-api/pull/498",
      },
    ],
  },
  {
    organisation: "Talawa Admin",
    logo: "https://www.toornify.com/sanity_esports_logo.jpg",
    organisation_github: "https://github.com/PalisadoesFoundation/talawa-admin",
    contribution: [
      {
        title: "Stable selector E2E test fix",
        link: "https://github.com/PalisadoesFoundation/talawa-admin/pull/7094",
      },
    ],
  },
  {
    organisation: "Code4GovTech",
    logo: "https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.3698267942851394.jpg",
    organisation_github: "https://github.com/Code4GovTech/C4GT",
    contribution: [
      {
        title: "DMP issue involvement for Haqdarshak agent support platform",
        link: "https://github.com/Code4GovTech/C4GT/issues/553",
      },
    ],
  },
  {
    organisation: "CliMA",
    logo: "https://www.toornify.com/sanity_esports_logo.jpg",
    organisation_github: "https://github.com/CliMA/ClimaCoupler.jl",
    contribution: [
      {
        title: "Expose DateTime clock parameter",
        link: "https://github.com/CliMA/ClimaCoupler.jl/pull/1827",
      },
    ],
  },
];

export const experienceData = [
  {
    company: "Haqdarshak",
    role: "Backend Developer Intern",
    timeframe: "June 2025 - August 2025",
    about: [
      "Engineered and deployed a scalable AI-powered knowledge sharing platform, similar to Stack Overflow, to centralize institutional knowledge for 40,000+ women agents resolving welfare scheme queries.",
      "Implemented RESTful APIs with role-based access control for agents and admins, JWT authentication, and an admin moderation dashboard that reduced content quality issues by 30%.",
      "Built a multilingual conversational RAG chatbot using Docling for document ingestion, ChromaDB for vector retrieval, and Sarvam AI for speech and translation across Indian regional languages.",
    ],
    image: "/stealth.jpeg",
  },
];

export const educationData = {
  college: "Maharaja Agrasen Institute of Technology",
  degree: "Bachelor of Technology - Computer Science and Engineering",
  timeframe: "2023 - 2027",
  location: "Delhi, India",
  about: [
    "Pursuing B.Tech in Computer Science and Engineering in Delhi, India.",
    "Building strong foundations in data structures and algorithms, object-oriented programming, DBMS, system design, and full-stack web development.",
    "Actively applying classroom learning through internships, hackathons, open source, and production-style software projects.",
  ],
};
