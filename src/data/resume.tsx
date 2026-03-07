import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mehdi Patel",
  initials: "MM",
  url: "https://www.linkedin.com/in/moahmmedmehdi/",
  location: "Manchester, England, United Kingdom",
  locationLink: "https://www.google.com/maps/place/Manchester/",
  description:
    "I am an AI Engineer focused on architecting and building backends for AI agents and RAG systems. I turn demo pilots into production AI applications.",
  summary:
    "I build backend systems that make AI products work in production: RAG pipelines, AI agents, LLM integrations, and the APIs that connect them. At Alteam I shipped a semantic search feature with LangChain and PGVector that cut talent search time by 40% and improved match accuracy by 25%. My core stack is TypeScript, Node.js, Python, and FastAPI, with hands-on experience in RAG systems, agent orchestration, and vector databases - plus fullstack capability in React and Next.js.",
  avatarUrl: "/me1.jpeg",
  skills: [
    "Retrieval-Augmented Generation (RAG)",
    "LangChain",
    "Agent Orchestration",
    "TypeScript",
    "Python",
    "Node.js",
    "FastAPI",
    "Next.js",
    "React.js",
    "PostgreSQL",
    "PGVector",
    "Kafka",
    "Redis",
    "Docker",
    "SQL",
    "NoSQL",
    "spaCy",
    "PyTorch",
    "Keras",
    "Pandas",
    "Numpy",
    "Scikit-Learn",
    "Flutter",
    "Firebase",
    "Java",
    "Spring Boot",
    "Angular",
    "Dart",
    "Vercel"
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
      title: "AI News Aggregator (GenAI)",
      href: "",
      dates: "Feb 2026 - Feb 2026",
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
      image: "https://private-user-images.githubusercontent.com/26627849/559785774-b95e1efe-4df6-4f6f-ac35-846fad9fbc41.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzI5MDcwNDEsIm5iZiI6MTc3MjkwNjc0MSwicGF0aCI6Ii8yNjYyNzg0OS81NTk3ODU3NzQtYjk1ZTFlZmUtNGRmNi00ZjZmLWFjMzUtODQ2ZmFkOWZiYzQxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNjAzMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjYwMzA3VDE4MDU0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTFhYWM3ZmU0N2VjOGU3MGFkY2ZjMTYwZjQ2ZDllYTczNDIwNmViNmU1NGQxZWEyNWVhNjlhNzRkZjA4NGIxOGImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.7OmyurL2PEUa1nIoXmK0EGAbeLqP8j3cDAFo4OsGN6w",
      video:
        "",
    },
    {
      title: "Scalable Real-Time Chat App",
      href: "",
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
      href: "",
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
      href: "",
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
    {
      title: "Shrike",
      href: "",
      dates: "May 2020 - Jun 2020",
      active: true,
      description:
        "A Skype clone developed using Flutter and Firebase, featuring one-to-one chat and video calling. The app ensures seamless communication with real-time updates, secure authentication, and efficient state management. Followed best coding practices for scalability and maintainability throughout the project.",
      technologies: [
        "Flutter",
        "Firebase",
        "AgoraRTC"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/mehdi1514/Shrike",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/shrike.png",
      video: "",
    },
    {
      title: "Todo List App",
      href: "",
      dates: "Sep 2023",
      active: true,
      description:
        "A full-stack to-do list web app built with React.js and a Node.js backend, featuring CRUD operations and MongoDB for data storage. Users can add, edit, and delete tasks, with todos saved in the database for persistence. The application includes authentication and authorization using JWT tokens, ensuring secure access. It is responsive and offers a seamless user experience.",
      technologies: [
        "HTML & CSS",
        "Javascript",
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Vite",
        "JWT"
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://mehdi-todo-list.netlify.app/",
        //   icon: <Icons.globe className="size-3" />,
        // },
        {
          type: "Source",
          href: "https://github.com/mehdi1514/TodoList",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/todolistpostforlio.png",
      video: "",
    },
    {
      title: "14 Stars",
      href: "",
      dates: "April 2020 - Present",
      active: true,
      description:
        "A religious app built with Flutter, featuring the Holy Qur'an in Arabic, with translation and transliteration. It includes supplications, Adhan timings, Qiblah direction, and audio recitations of Qur'an chapters and supplications. Has 10k+ downloads on Google Play Store.",
      technologies: [
        "Flutter"
      ],
      links: [
        {
          type: "Play Store",
          href: "https://play.google.com/store/apps/details?id=com.zain.stars14&hl=en_GB",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/14_stars.webp",
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
