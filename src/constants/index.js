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
  xander,
  meta,
  shopify,
  starbucks,
  tesla,
  teksystems,
  alexParisi,
  alexWestner
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
    "I’m a Software Engineer in Test building automation for AI systems, devices, and production-quality user experiences—from AR glasses to Apple’s next-generation Siri workflows.",
    "My work spans Python test automation, AI evaluation pipelines, device validation, and quality engineering, with a strong focus on making systems reliable, and scalable.",
    "I bring a builder’s mindset to QA: I automate the hard parts, instrument the right signals, and ship workflows that reduce triage time, improve release confidence, and catch issues before users do.",
  ],
};

const services = [
  {
    title: "AI Quality Engineering",
    icon: creator,
  },
  {
    title: "QA Automation",
    icon: mobile,
  },
  {
    title: "Device & Performance Testing",
    icon: backend,
  },
  {
    title: "Full-Stack Prototyping",
    icon: web,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Swift",
    icon: javascript,
  },
  {
    name: "Kotlin",
    icon: javascript,
  },
  {
    name: "Dart",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: javascript,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C / C++",
    icon: cplusplus,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Bash",
    icon: javascript,
  },
  {
    name: "OpenCV",
    icon: opencv,
  },
  {
    name: "TensorFlow",
    icon: javascript,
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
    name: "WebRTC",
    icon: webRTC,
  },
  {
    name: "Docker",
    icon: javascript,
  },
  {
    name: "Google Cloud",
    icon: googlecloud,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "AI Quality Engineer (Contractor via TEKsystems)",
    company_name: "Apple",
    icon: teksystems,
    iconBg: "#E6DEDD",
    date: "Apr 2026 - Oct 2026",
    points: [
      "Automated synthetic persona and test data generation in Python, producing 400+ Siri test scenarios per persona from simulated user profiles.",
      "Replaced manual storyline review with an agentic pipeline that scores coherence across 10+ metrics (temporal, geographic and more), cutting persona creation time by 60%.",
      "Ran 5+ AI judges on every test run before human review, checking visual evidence and logs and cutting triage time by 80%.",
      "Filed, reproduced, triaged and verified 50+ Radar bugs per week in Xcode; these reports helped tune Siri's evaluator models.",
      "Connected filed Radars to an MCP agent pipeline that clustered bugs and routed them to the right teams.",
      "Tracked release quality: 12% gains every two weeks, adding up to 2x+ improvement per release cycle.",
    ],
  },
  {
    title: "Quality Automation Engineer",
    company_name: "Xander Glasses",
    icon: xander,
    iconBg: "DarkBlue",
    date: "Sep 2024 - Aug 2025",
    points: [
      "Wrote Robolectric/JUnit tests for Bluetooth Low Energy (BLE) pairing, connections, app updates and Wi‑Fi to Azure cloud.",
      "Built custom Flutter audio test apps measuring Word Error Rate (WER) across background noise levels and microphone setups, along with audio buffer and latency.",
      "Ran on-device performance tests with the glasses firmware (isolating background processes), logging thermal, battery, CPU and memory via ADB; optimized the Microsoft speech-to-text engine, improving thermal stability by 25%.",
      "Wrote fault-tolerant Bash scripts to provision multiple devices at once, saving 40 minutes per device.",
      "Designed a scalable device QA plan (Dart, Kotlin, C; Android, iOS) for cross-device consistency, cutting onboarding by 30%.",
      "Built 500+ unit, integration and regression tests across the app codebase, reducing QA bug reports by 45%.",
      "Built New Relic dashboards and automated bug diagnostics, cutting critical failures by 40%.",
      "Refactored core Kotlin logic, resolving 40+ critical issues; also helped migrate Dart code to Kotlin for faster on-device AI.",
    ],
  },
  {
    title: "Lead Teaching Assistant",
    company_name: "Northeastern University",
    icon: northeastern,
    iconBg: "#E6DEDD",
    date: "Aug 2025 - Apr 2026",
    points: [
      "Designed test-driven coursework (TypeScript, React, Jest, Cypress, Docker); mentored 400+ students via code reviews.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "KansasTek",
    icon: hiringtek,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Apr 2023",
    points: [
      "Applied OpenCV computer vision to monitor live proctored interviews in real time, reducing staff effort by 50% in early screening rounds while preserving interview integrity.",
      "Built a real-time multi-peer video prototype with Socket.io and Peer.js, supporting 700 parallel proctored interviews.",
      "Co-authored a published chapter (Taylor & Francis) on AI-oriented competency frameworks and AWS S3-backed data solutions for digital talent management.",
    ],
  },
];

const testimonials = [
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
      "Rohan is a strong, independent contributor to a small team. His work is thorough, he's a quick study on complex systems, and he cares deeply about his work and helping the team and company succeed.",
    name: "Alex Westner",
    designation: "CEO",
    company: "Xander",
    image: alexWestner,
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
