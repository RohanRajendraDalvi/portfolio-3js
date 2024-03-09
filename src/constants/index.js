import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  hiringtek,
  vijaydeep,
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
  webRTCproject

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

const services = [
  {
    title: "Full stack Web Developer React/Angular",
    icon: web,
  },
  {
    title: "Web-RTC engineer Peer.js Socket.io",
    icon: mobile,
  },
  {
    title: "Java MVC developer",
    icon: backend,
  },
  {
    title: "SQL/noSQL database expert",
    icon: creator,
  },
];

const technologies = [
  
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "openCV",
    icon: opencv,
  },
  {
    name: "webRTC",
    icon: webRTC,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Google Cloud",
    icon: googlecloud,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
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
    name: "git",
    icon: git,
  },

];

const experiences = [
  {
    title: "WebRTC engineer",
    company_name: "HiringTek",
    icon: hiringtek,
    iconBg: "#E6DEDD",
    date: "February 2022 to April 2023",
    points: [
      "Created a multi-peered prototype using socket.io and peer.js enabling up to 700 Parallel Proctored Interviews.",
      "Integrated the system with the safe-exam-browser using Javascript to secure the environment during the interview.",
      "Facilitated online interviews using WebRTC and cut down the time spent during the hiring process by 95%.",
      "Improved the UI of the website using AngularJS and TypeScript and fixed over 50 frontend related bugs.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Vijaydeep Agencies",
    icon: vijaydeep,
    iconBg: "#E6DEDD",
    date: "December 2021 - May 2022",
    points: [
      "Developed a dynamic, user-friendly, and responsive front-end using bootstrap-5 for the Company Website.",
      "Built a third normal form database design, using SQL & phpMyAdmin for the website’s product and news pages.",
      "Established an internal email service using Google AppScript and Namecheap email service for firm employees.",
      "Developed an automated contact reply service using Google AppScript and javascript for the contact us page.",
      "Enhanced the company's online visibility in the surgical equipment market and improved SEO score by over 80%.",
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
    image: "./src/assets/testimonials/pradeep.jpeg",
  },
  {
    testimonial:
      "He astonishes me by digging deep into understanding the fundamental ideas.",
    name: "Dr. Vidyadhari Singh",
    designation: "Head of Department Cyber-Security",
    company: "University of Mumbai",
    image: "./src/assets/testimonials/drSingh.jpeg",
  },
  {
    testimonial:
      "Rohan is a quick learner who can quickly comprehend information and keep it for a long time.",
    name: "Dr. Megharani Patil",
    designation: "Head of Department AI/ML",
    company: "University of Mumbai",
    image: "./src/assets/testimonials/drPatil.jpeg",
  },
];

const projects = [
  {
    name: "Airmouse",
    description:
      "Utilized Python’s OpenCV to develop an initial version, using 3 colored finger tracking for gesture recognition.       Transitioned to TensorFlowJS for the subsequent version,to enhance gesture recognition accuracy and flexibility.      Built a web application using JavaScript providing a friendly UI to the user for defining over 50 hand gestures",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openCV",
        color: "green-text-gradient",
      },
      {
        name: "HTML,CSS",
        color: "pink-text-gradient",
      },
    ],
    image: airmouse,
    source_code_link: "https://airmouse1-0.onrender.com",
  },
  {
    name: "Yoga Ai",
    description:
      "Enhanced yoga experience through automated feedback and visual aid on posture improvements for 5 yoga poses.Developed Yoga AI using TensorFlowJS & camera data analysis to accurately classify yoga poses on browsers.",
    tags: [
      {
        name: "tensorFlowJS",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "BootStrap",
        color: "pink-text-gradient",
      },
    ],
    image: yogai,
    source_code_link: "https://yogai.onrender.com/",
  },
  {
    name: "Super Secure Chat Application",
    description:
      "Hosted and Developed a triple Encrypted Chat Application using Sockets.io, PeerJS, JavasScript and Bootstrap. Implemented Mixed Cypher for end to end encryption and  OTP security System for login into chat room.",
    tags: [
      {
        name: "PeerJS",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.io",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: ssca,
    source_code_link: "https://super-safe-chat-app.onrender.com",
  },
  {
    name: "Graphical Image Manipulation and Enhancement App",
    description:
      "Built a Java application with GUI in JSwing that performs 18 image processing features for GRIME, including channel visualization, blurring, image compression, flipping, color enhancement, sharpening, color correction etc.  Provided Histogram Visualization and real time rollback facilities improving usability and helping user experience.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "MVC",
        color: "green-text-gradient",
      },
      {
        name: "JSwing",
        color: "pink-text-gradient",
      },
    ],
    image: grime,
    source_code_link: "https://github.com/RohanRajendraDalvi/GRIME",
  },
  {
    name: "WebRTC prototype",
    description:
      "Sure, leveraging technologies such as WebRTC, Peer.js, and Socket.io, I've successfully crafted a robust prototype for webRTC applications. This solution enables seamless real-time communication, facilitating peer-to-peer connections for audio, video, and data sharing. With Peer.js, I've streamlined the process of establishing peer connections, while Socket.io ensures efficient signaling and messaging between peers. This prototype lays a strong foundation for scalable, interactive webRTC applications, empowering users with immersive communication experiences across various platforms and devices.",
    tags: [
      {
        name: "peer.js",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: webRTCproject,
    source_code_link: "https://webrtc-prototype.onrender.com/",
  },
  {
    name: "Social media recommendation algorithm",
    description:
      "I've created a JavaScript application demonstrating Jaccard similarity and cosine similarity for social media recommendations. Users input their interests, and the app compares them with others' data using these algorithms to provide personalized recommendations, making content more relevant and engaging.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: graph,
    source_code_link: "https://graph-similarity.onrender.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
