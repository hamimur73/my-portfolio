import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.png";
import project4 from "../assets/projects/project4.png";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "A modern responsive portfolio website built using React, Vite, Tailwind CSS and Framer Motion with beautiful animations and clean UI.",

    image: project1,

    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "https://github.com/hamimur73",

    live: "https://your-portfolio.vercel.app",

    category: "Frontend",
  },

  {
    title: "AI Chat Application",
    description:
      "A modern AI chatbot interface with responsive design, API integration and clean user experience.",

    image: project2,

    tech: [
      "React",
      "Node.js",
      "Express",
      "OpenAI API",
    ],

    github: "https://github.com/hamimur73",

    live: "https://example.vercel.app",

    category: "AI",
  },

  {
    title: "Library Management System",
    description:
      "A complete library management system with authentication, CRUD operations and database integration.",

    image: project3,

    tech: [
      "React",
      "MongoDB",
      "Express",
      "Node.js",
    ],

    github: "https://github.com/hamimur73",

    live: "https://example.vercel.app",

    category: "Full Stack",
  },

  {
    title: "Smart Robotics Project",
    description:
      "An embedded systems and robotics project using sensors, microcontrollers and intelligent automation.",

    image: project4,

    tech: [
      "Arduino",
      "C++",
      "Embedded Systems",
      "Robotics",
    ],

    github: "https://github.com/hamimur73",

    live: "https://example.com",

    category: "Robotics",
  },
];

export default projects;