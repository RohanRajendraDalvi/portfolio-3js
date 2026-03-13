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
    "I just graduated from Northeastern University with an MS in Computer Science and I'm ready to hit the ground running.",
    "I've built and shipped scalable web platforms, including a WebRTC system handling 700 concurrent users and conversational AI applications with multi-LLM backends. I focus on writing clean, maintainable code that works, scales, and ships.",
  ],
};

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "QA Automation Engineer",
    icon: mobile,
  },
  {
    title: "WebRTC Engineer",
    icon: backend,
  },
  {
    title: "AI/ML Engineer",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: javascript, // placeholder
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Swift",
    icon: javascript, // placeholder
  },
  {
    name: "Kotlin",
    icon: javascript, // placeholder
  },
  {
    name: "Java",
    icon: javascript, // placeholder
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "Dart",
    icon: javascript, // placeholder
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
    name: "Angular",
    icon: reactjs, // placeholder
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
  {
    title: "Lead Graduate Teaching Assistant",
    company_name: "Northeastern University",
    icon: northeastern,
    iconBg: "#E6DEDD",
    date: "Aug 2024 - Dec 2025",
    points: [
      "Rebuilt course infrastructure with full test coverage and TDD methodology, training 400+ students with test-driven workflows.",
      "Led a team of three TAs, ran daily syncs, resolved conflicts, and maintained consistent grading to ensure uniform evaluation standards.",
      "Developed Meet'N'Treat, a full iOS app in Swift/UIKit with Firebase for auth and real-time data, featuring pet profiles, slot-based booking, in-app chat, reviews and ratings, and Stripe payment integration - designed for scalability.",
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
      "Developed Swift based diagnostic and device-management tooling across 30+ modules with structured logging and New Relic observability, reducing average debugging time and automating customer reports that previously consumed 20% of support time.",
      "Wrote comprehensive automated test suites in Swift (XCTest) following TDD methodology, resolving 46 GitHub issues and establishing reliable CI-gated quality checks across the codebase.",
      "Performed hands-on mobile device testing, setup, and configuration for 50+ AR devices weekly, using Bash command-line scripts to automate Geekbench hardware validation and catch performance regressions pre-ship.",
      "Defined and executed the automation testing strategy across the QA team, containerizing 60+ modules in Docker, standardizing Git workflows (Jira-tracked), and cutting release time by 32%",
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
      "Co-authored a published book chapter (Francis & Taylor) on NLP-driven evaluation pipelines and cloud-scale data processing on AWS.",
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
    designation: "Head of Department Cyber-Security",
    company: "University of Mumbai",
    image: drSingh,
  },
  {
    testimonial:
      "Rohan is a quick learner who can quickly comprehend information and keep it for a long time.",
    name: "Dr. Megharani Patil",
    designation: "Head of Department AI/ML",
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
    image: graph, // placeholder
    source_code_link: "https://github.com/RohanRajendraDalvi/CMT-winners",
  },
  {
    name: "CineBot",
    description:
      "Built a full-stack conversational search application in Python that uses NLP embedding models, FAISS vector indices, and ChromaDB to power natural-language movie discovery with dual-query scoring, tunable relevance weights, and metadata filtering. Engineered a Flask backend serving multiple semantic search pipelines with switchable embedding models, and integrated Groq API and local Ollama/Gemma LLMs for conversational summarization and follow-up.",
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
    image: graph, // placeholder
    source_code_link: "https://github.com/Mansi142000/NLP-Project",
  },
  {
    name: "Meet'N'Treat",
    description:
      "Built an iOS application using UIKit and Firebase (Auth + backend) that enables secure scheduling of nearby pet interactions, in-home café-style experience, making pet companionship accessible to urban users without the cost or commitment of ownership.",
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
    image: yogai, // placeholder
    source_code_link: "https://github.com/RohanRajendraDalvi/MeetNTreat-New",
  },
  {
    name: "Xander Glasses AR Testing",
    description:
      "Reduced AR device test cycles from 1 year → 1.5 months through automation. Built and maintained AR assistive applications for hearing-impaired users across iOS and Android.",
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
    image: xander, // placeholder
    source_code_link: "https://www.xanderglasses.com/xanderglasses",
  },
  {
    name: "HiringTek WebRTC Platform",
    description:
      "Designed and built a WebRTC video interview platform from scratch using star-topology architecture (Socket.io, Peer.js), scaling to 700 concurrent sessions while keeping costs under $0.30 per interview-hour.",
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
    image: webRTCproject,
    source_code_link: "https://www.taylorfrancis.com/books/edit/10.1201/9781003440901/ai-oriented-competency-framework-talent-management-digital-economy-alex-khang",
  },
  {
    name: "Yoga AI",
    description:
      "Enhanced yoga experience through automated feedback and visual aid on posture improvements for 5 yoga poses. Developed Yoga AI using TensorFlowJS & camera data analysis to accurately classify yoga poses on browsers.",
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
    image: yogai,
    source_code_link: "https://yogai.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
