import { Icons } from "@/components/icons";
import { BrainCircuit, HomeIcon, NotebookIcon, ShieldCheck, SquareActivity, Workflow } from "lucide-react";

export const DATA = {
  name: "Mehdi Patel",
  initials: "MM",
  url: "https://www.linkedin.com/in/moahmmedmehdi/",
  location: "Manchester, England, United Kingdom",
  locationLink: "https://www.google.com/maps/place/Manchester/",
  description:
    "I build production-ready AI agents and RAG systems. If your AI pilot never made it to production, that's exactly what I fix.",
  summary:
    "I build backend systems that make AI products work in production: RAG pipelines, AI agents, LLM integrations, and the APIs that connect them. At Alteam I shipped a semantic search feature with LangChain and PGVector that cut talent search time by 40% and improved match accuracy by 25%. My core stack is TypeScript, Node.js, Python, and FastAPI, with hands-on experience in RAG systems, agent orchestration, and vector databases - plus fullstack capability in React and Next.js.",
  bookCallText:
    "Book a Free Intro Call",
  avatarUrl: "/me1.jpeg",
  skills: [
    "Retrieval-Augmented Generation (RAG)",
    "Vector Databases",
    "Agent Orchestration",
    "LangChain",
    "LangGraph",
    "TypeScript",
    "Python",
    "Node.js",
    "FastAPI",
    "PostgreSQL",
    "NoSQL",
    "AWS",
    "Docker",
    "Next.js",
    "Kafka",
    "Redis",
    "Vercel",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "mehdi.patel@gmail.com",
    tel: "",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/mehdi1514",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/moahmmedmehdi/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:mehdi.patel@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },
  services: [
    {
      title: "RAG & Agent Development",
      description: "Design and build retrieval pipelines using PGVector and LangChain, including multi-index search, tool use, and agent routing. Connected to your Postgres database with proper access control and audit logging.",
      icon: <BrainCircuit size={45} />
    },
    {
      title: "AI Feature Integration",
      description: "Full-stack implementation of AI features into your product using React/Next.js on the frontend and Node/Express on the backend. Deployed on cloud platforms like Vercel and AWS, with CI/CD pipelines setup.",
      icon: <Workflow size={45} />
    },
    {
      title: "AI Observability Setup",
      description: "Instrumentation for cost tracking, latency monitoring, and prompt/config CI/CD so your AI system doesn't become a black box in production.",
      icon: <SquareActivity size={45} />
    },
    {
      title: "Security & Permissions for AI",
      description: "Ensuring your AI only accesses data a user is authorised to see. Authentication, row-level access, structured logging, and role-based access.",
      icon: <ShieldCheck size={45} />
    },
  ],

  work: [
    {
      company: "Alteam",
      href: "",
      badges: [],
      location: "London Area, United Kingdom",
      title: "AI Engineer (Full Stack)",
      logoUrl: "/alteamio_logo.jpeg",
      start: "Dec 2024",
      end: "Present",
      description:
        "Engineered an AI-powered semantic search feature with LangChain, PostgreSQL, and PGVector that reduced talent search time by 40% and improved talent match accuracy by 25%. Developed a RAG system and backend APIs for talent matching, and shipped production-ready features across React, Next.js, Node.js, and Hono within a robust CI/CD pipeline.",
    },
    {
      company: "SAP Labs India",
      href: "",
      badges: [],
      location: "Bengaluru",
      title: "Backend Engineer",
      logoUrl: "/sap_logo.png",
      start: "Jul 2022",
      end: "Aug 2023",
      description:
        "Worked on an extensibility feature for a multi-tenant cloud service using SAP One Domain Model (ODM), building RESTful APIs and Kafka integrations to improve data integration and scalability. Enhanced key entity types to increase system flexibility by 40%, implemented caching to cut API response times by 15%, and wrote over 30 unit tests with Jest, JUnit, and Mockito to reach around 90% coverage. Delivered over 30 successful deployments using Docker, Jenkins, and GitHub in a distributed, production environment.",
    },
    {
      company: "Barclays",
      badges: [],
      href: "",
      location: "WFH",
      title: "Frontend Engineer",
      logoUrl: "/barclays_logo.png",
      start: "Jun 2021",
      end: "Aug 2021",
      description:
        "Developed responsive user interfaces for an enterprise-level client risk assessment system using Angular, enhancing the loan approval process. Optimized API data retrieval to reduce page load times by 25% and improve system performance, collaborated with senior developers to resolve integration issues, decreasing bugs by 15%, and contributed to enhancing creditworthiness assessment features that increased loan approval accuracy by 10%. Gained hands-on experience with Angular, Node.js, and Agile methodologies in a professional development environment.",
    },
  ],
  education: [
    {
      school: "The University of Manchester",
      href: "https://www.manchester.ac.uk/",
      degree: "Msc Advanced Computer Science",
      logoUrl: "/uom_logo.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "Veermata Jijabai Technological Institute",
      href: "https://vjti.ac.in/",
      degree: "B.Tech in Computer Engineering",
      logoUrl: "/vjti_logo.jpg",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Talent Sourcing Agent (RAG)",
      href: "https://www.alteam.io",
      dates: "Dec 2026 - Present",
      active: true,
      description:
        "A single-agent RAG system that helps clients find the best talent from Alteam's database for their needs by using AI to understand their requirements and match them with the best candidates.",
      technologies: [
        "Typescript",
        "Gemini API",
        "PGVector",
        "PostgreSQL",
        "Langchain.js",
        "Vercel",
        "CI/CD"
      ],
      links: [
        {
          type: "Platform",
          href: "https://www.alteam.io",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/alteam.png",
      video:
        "",
    },
    {
      title: "AI News Aggregator (GenAI)",
      href: "https://github.com/mehdi1514/My-AI-News-Aggregator",
      dates: "Feb 2026",
      active: true,
      description:
        "An AI-driven news aggregation service that curates, summarizes and emails a daily digest of the latest AI news.",
      technologies: [
        "Python",
        "Gemini API",
        "Web Scraping (Beautiful Soup)",
        "Docker",
        "PostgreSQL",
        "Github Actions"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mehdi1514/My-AI-News-Aggregator",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai-news-aggregator-example.png",
      video:
        "",
    },
    {
      title: "Scalable Real-Time Chat App",
      href: "https://github.com/mehdi1514/Scalable-chat-app/",
      dates: "Oct 2024 - Dec 2024",
      active: true,
      description:
        "A scalable real-time chat system with a Node.js backend, using Redis Pub/Sub for real-time messaging, Kafka for message processing, PostgreSQL for durable storage, and NextAuth.js for secure authentication.",
      technologies: [
        "Next.js",
        "Node.js",
        "Socket.io",
        "Redis",
        "Kafka",
        "PostgreSQL"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mehdi1514/Scalable-chat-app/",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/mehdi1514/Scalable-chat-app/raw/main/app_screenshots/chatapp.png",
      video:
        "",
    },
    {
      title: "StudyLM - Create Study Notes with AI",
      href: "https://github.com/mehdi1514/StudyLM?tab=readme-ov-file",
      dates: "Sept 2024 - Oct 2024",
      active: true,
      description:
        "An AI-powered note-taking application built with Next.js where users can create, edit, and organize notes, backed by a Convex data layer. It integrates LangChain and Gemini to generate summaries and insights from notes, while Clerk provides secure authentication and Tailwind CSS delivers a modern, responsive UI.",
      technologies: [
        "Next.js",
        "Convex",
        "Clerk",
        "LangChain",
        "Gemini",
        "Tailwind CSS"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mehdi1514/StudyLM?tab=readme-ov-file",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/mehdi1514/StudyLM/raw/main/screenshots/ai-result.png",
      video:
        "",
    },
    {
      title: "App Review Classification Using PLMs",
      href: "https://github.com/mehdi1514/AppReviewClassification",
      dates: "Feb 2024 - Sep 2024",
      active: true,
      description:
        "An end-to-end NLP system that classifies app reviews using fine-tuned models like BERT4RE, ALBERT, and DistilBERT, achieving over 89% F1-score. A Flask-based backend and UI let users submit single or batched reviews for classification and export results to Excel, helping product teams analyze feedback efficiently.",
      technologies: [
        "PyTorch",
        "Keras",
        "Hugging Face",
        "Flask",
        "Deep Learning",
        "LLMs"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mehdi1514/AppReviewClassification",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/revclassify.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "General Mills CodeIcon",
      dates: "Jan 2020",
      location: "Mumbai, India",
      description:
        "Led a team in a 2-day ML hackathon, analyzing a recipes dataset to predict cuisine types using Naive Bayes and Random Forest models.",
      image:
        "/General_Mills.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "ACM Hackthon",
      dates: "Mar 2020",
      location: "Mumbai, India",
      description:
        "Collaborated with a team to develop an HR Management System aimed at streamlining administrative workflows such as employee data management, leave requests, and reimbursement claims.",
      image:
        "/acm_hack.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack With Code Warriors",
      dates: "Dec 2020",
      location: "Online",
      description:
        "Developed Boctor, a trained conversational chatbot with images(link) support which does not allow you to feel absence of doctors and nutritionists and provides important health related information. It suggests diet plans based on user's age, weight, height, gender and the level of pysical activeness(or the no. of days a user works out). By just having a conversation with the bot, the users can book appointments with doctors. It has other features like displaying 3D images of heart, pills, etc.",
      icon: "public",
      image:
        "/cw.webp",
      links: [],
    },
  ],
  communities: [
    {
      title: "Google Developer Student Clubs VJTI",
      dates: "Sep 2020 - Sep 2021",
      location: "Mumbai, India",
      description:
        "Organized and led Android app development sessions, teaching over 10 students Kotlin, Android Studio, and CRUD app creation. Conducted workshops on unit testing, app architecture, and best practices, while guiding students in using Git and GitHub for effective version control and collaboration.",
      icon: "public",
      image:
        "/gdsc_vjti.jpeg",
    },
    {
      title: "Community of Coders VJTI",
      dates: "Jun 2019 - May 2022",
      location: "Mumbai",
      description:
        "Mentored 8 junior developers across two teams, leading a full-stack web app project using the MERN stack and guiding a cross-platform mobile app development with Flutter and Firebase. Conducted code reviews, resolved issues, ensured successful deployments, and organized knowledge-sharing sessions on web development, app development, and machine learning.",
      icon: "public",
      image:
        "/coc_vjti.jpeg",
    }
  ]
} as const;
