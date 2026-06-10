import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  hiringtek,
  vijaydeep,
  northeastern,
  yogai,
  airmouse,
  ssca,
  grime,
  threejs,
  sql,
  webRTC,
  python,
  opencv,
  cplusplus,
  googlecloud,
  graph,
  webRTCproject,
  drSingh,
  drPatil,
  pradeep,
  xander
} from "../assets";

// Import screenshot images
import cinebot from "../../screenshots/cinebot.jpg";
import meetandtreat1 from "../../screenshots/meetandtreat.jpg";
import meetandtreat2 from "../../screenshots/meetandtreat2.jpg";
import meetandtreat3 from "../../screenshots/meetandtreat3.jpg";
import meetandtreat4 from "../../screenshots/meetandtreat4.jpg";
import meetandtreat5 from "../../screenshots/meetandtreat5.jpg";
import meetandtreat6 from "../../screenshots/meetandtreat6.jpg";
import meetandtreat7 from "../../screenshots/meetandtreat7.jpg";
import slipsense1 from "../../screenshots/SlipSense_frost.jpg";
import slipsense2 from "../../screenshots/SlipSense_frost2.jpg";
import slipsense3 from "../../screenshots/SlipSense_frost3.jpg";
import slipsense4 from "../../screenshots/SlipSense_frost4.jpg";
import slipsense5 from "../../screenshots/SlipSense_frost5.jpg";
import webrtc1 from "../../screenshots/webrtc1.jpg";
import webrtc2 from "../../screenshots/webrtc2.jpg";

// Testimonial author photos — save these images and adjust the filenames/paths as needed.
// Until the files exist, point them at an existing placeholder so the build doesn't break.
import alexWestner from "../../screenshots/alex-westner.jpg";
import alexParisi from "../../screenshots/alex-parisi.jpg";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

// Centralized About section copy so content is versionable & testable
export const aboutContent = {
  subtitle: "Introduction",
  heading: "Overview.",
  paragraphs: [
    "I started out building full-stack web products and over the last few years I've pivoted hard into software quality — test automation, SDET work, and AI evaluation.",
    "I currently work as an AI Quality Engineer (via TEKsystems, client: Apple), focused on automated testing and model quality. I bring a builder's instinct to QA: I've shipped enough production code to test it the way an engineer does — automated, scalable, and CI-gated.",
  ],
};

const services = [
  {
    title: "SDET / QA Automation",
    icon: mobile,
  },
  {
    title: "AI Quality Engineer",
    icon: creator,
  },
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "WebRTC Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Swift",
    icon: javascript, // placeholder
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "TypeScript",
    icon: javascript, // placeholder
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Kotlin",
    icon: javascript, // placeholder
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "WebRTC",
    icon: webRTC,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Google Cloud",
    icon: googlecloud,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: javascript, // placeholder
  },
  {
    name: "Firebase",
    icon: javascript, // placeholder
  },
];

const experiences = [
  // Current role — kept intentionally minimal and NDA-safe (no internal product,
  // tooling, or metric detail). Confirm or remove before publishing.
  {
    title: "AI Quality Engineer (via TEKsystems)",
    company_name: "TEKsystems — Client: Apple",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Apr 2026 - Present",
    points: [
      "Work within a cross-functional team on software quality for AI-powered application features, focused on automated testing and model quality.",
      "Build and contribute to test automation in Python and Swift, and provide human evaluation feedback (RLHF) to improve model response quality.",
      "Collaborate on multi-agent evaluation pipelines and resolve quality issues as a developer using Xcode and CI workflows.",
    ],
  },
  {
    title: "QA Automation Engineer",
    company_name: "Xander Glasses",
    icon: xander,
    iconBg: "DarkBlue",
    date: "Sep 2024 - Aug 2025",
    points: [
      "Built and maintained AR assistive applications for hearing-impaired users across iOS and Android, working extensively in Swift (UIKit, XCTest, Xcode) to ship features on both platforms simultaneously.",
      "Tested a real-time voice-powered assistive tool on wearable AR hardware across 100+ edge cases, uncovering memory leaks, latency spikes, and buffer overflows; fixes improved captioning efficiency by 26% and reduced crash rates.",
      "Developed Swift-based diagnostic and device-management tooling across 30+ modules with structured logging and New Relic observability, reducing average debugging time and automating customer reports that previously consumed 20% of support time.",
      "Wrote comprehensive automated test suites in Swift (XCTest) following TDD methodology, resolving 46 GitHub issues and establishing reliable CI-gated quality checks across the codebase.",
      "Performed hands-on mobile device testing, setup, and configuration for 50+ AR devices weekly, using Bash scripts to automate Geekbench hardware validation and catch performance regressions pre-ship.",
      "Defined and executed the automation testing strategy across the QA team, containerizing 60+ modules in Docker, standardizing Jira-tracked Git workflows, and cutting release time by 32%.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "HiringTek",
    icon: hiringtek,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Apr 2023",
    points: [
      "Authored 100+ Swift challenges with automated test suites for the platform's technical assessment modules supporting interviews.",
      "Integrated Python-based OpenCV gaze monitoring to flag suspicious behavior during live interviews, cutting proctoring effort by 18%.",
      "Designed and built a WebRTC video interview platform from scratch using star-topology architecture (Socket.io, Peer.js), scaling to 700 concurrent sessions while keeping costs under $0.30 per interview-hour.",
      "Co-authored a published book chapter (Taylor & Francis) on NLP-driven evaluation pipelines and cloud-scale data processing on AWS.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Vijaydeep Agencies",
    icon: vijaydeep,
    iconBg: "#E6DEDD",
    date: "Dec 2021 - Feb 2022",
    points: [
      "Built a responsive website from scratch, cutting page load time by 60% and boosting mobile engagement by 35%.",
      "Drove an 80% SEO improvement through metadata and sitemap optimization, boosting organic visibility in a competitive B2B market.",
      "Designed a normalized database in SQLite and Supabase to manage 500+ product SKUs, reducing catalog query time by 70%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rohan is a strong, independent contributor to a small team. His work is thorough, he's a quick study on complex systems, and he cares deeply about his work and helping the team and company succeed.",
    name: "Alex Westner",
    designation: "CEO",
    company: "Xander",
    image: alexWestner,
  },
  {
    testimonial:
      "Very few people at this stage of their career are as driven as Rohan. He has what it takes, and I'm confident he'll have an amazing career — I've worked with dozens of interns and rarely say that.",
    name: "Alex Parisi",
    designation: "Senior Software Engineer (formerly Xander)",
    company: "Bloomberg",
    image: alexParisi,
  },
  {
    testimonial:
      "He has a deep passion for technology, and I can vouch for him as a valuable asset to any organization.",
    name: "Pradeep Haldankar",
    designation: "Director",
    company: "Vijaydeep Agencies",
    image: pradeep,
  },
  {
    testimonial:
      "He astonishes me by digging deep into understanding the fundamental ideas.",
    name: "Dr. Vidyadhari Singh",
    designation: "Head of Department, Cyber-Security",
    company: "University of Mumbai",
    image: drSingh,
  },
  {
    testimonial:
      "Rohan is a quick learner who can quickly comprehend information and retain it for a long time.",
    name: "Dr. Megharani Patil",
    designation: "Head of Department, AI/ML",
    company: "University of Mumbai",
    image: drPatil,
  },
];

const projects = [
  {
    name: "Friction Risk Observation Slip Tracking",
    description:
      "Real-time winter road slip probability using computer vision, spatiotemporal decay, and weather APIs. Built with React Native (Expo), Firebase, and geospatial analysis.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
    ],
    images: [slipsense1, slipsense2, slipsense3, slipsense4, slipsense5],
    source_code_link: "https://github.com/RohanRajendraDalvi/CMT-winners",
  },
  {
    name: "CineBot",
    description:
      "Full-stack conversational search application in Python using NLP embedding models, FAISS vector indices, and ChromaDB to power natural-language movie discovery with dual-query scoring, tunable relevance weights, and metadata filtering. A Flask backend serves multiple semantic search pipelines with switchable embedding models, integrating Groq API and local Ollama/Gemma LLMs for conversational summarization. (Team project.)",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "FAISS",
        color: "green-text-gradient",
      },
      {
        name: "ChromaDB",
        color: "pink-text-gradient",
      },
    ],
    images: [cinebot],
    source_code_link: "https://github.com/Mansi142000/NLP-Project",
  },
  {
    name: "Meet'N'Treat",
    description:
      "iOS application built with Swift/UIKit and Firebase (Auth + backend) that enables secure scheduling of nearby pet interactions and an in-home café-style experience, making pet companionship accessible to urban users without the cost or commitment of ownership.",
    tags: [
      {
        name: "Swift",
        color: "blue-text-gradient",
      },
      {
        name: "UIKit",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    images: [meetandtreat1, meetandtreat2, meetandtreat3, meetandtreat4, meetandtreat5, meetandtreat6, meetandtreat7],
    source_code_link: "https://github.com/RohanRajendraDalvi/MeetNTreat-New",
  },
  {
    name: "Xander Glasses AR Testing",
    description:
      "Built and maintained AR assistive applications for hearing-impaired users across iOS and Android, with automation that significantly shortened device test cycles.",
    tags: [
      {
        name: "Kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "C",
        color: "green-text-gradient",
      },
      {
        name: "Docker",
        color: "pink-text-gradient",
      },
    ],
    images: [xander],
    source_code_link: "https://www.xanderglasses.com/xanderglasses",
  },
  {
    name: "HiringTek WebRTC Platform",
    description:
      "WebRTC video interview platform built from scratch using star-topology architecture (Socket.io, Peer.js), scaling to 700 concurrent sessions while keeping costs under $0.30 per interview-hour.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Socket.io",
        color: "pink-text-gradient",
      },
    ],
    images: [webrtc1, webrtc2],
    source_code_link: "https://www.taylorfrancis.com/books/edit/10.1201/9781003440901/ai-oriented-competency-framework-talent-management-digital-economy-alex-khang",
  },
  {
    name: "Yoga AI",
    description:
      "Browser-based yoga pose classifier offering automated feedback and visual aids on posture for 5 yoga poses, built with TensorFlow.js and live camera analysis.",
    tags: [
      {
        name: "TensorFlow.js",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    images: [yogai],
    source_code_link: "https://yogai.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
