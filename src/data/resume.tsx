import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Mehdi",
  initials: "MM",
  url: "https://dillion.io",
  location: "Manchester, UK",
  locationLink: "https://www.google.com/maps/place/Manchester/",
  description:
    "Experienced Software Engineer and AI Enthusiast. Love building things with web, mobile app and AI tools and frameworks. Very active on LinkedIn.",
  summary:
    "I recently did my MSc in Advanced Computer Science from the University of Manchester and a Computer Engineering grad from VJTI Mumbai. I've honed my skills as a Software Developer Intern at Barclays and Associate Developer at SAP Labs India—crafting solutions with the latest tech. I'm all about building sleek web apps, powerful mobile experiences, and diving into the world of AI. Teaching is my jam too—I loved guiding fellow students during my time at VJTI. Let’s connect and create something extraordinary!",
  avatarUrl: "/me1.jpeg",
  skills: [
    "Python",
    "Javascript",
    "Typescript",
    "C++",
    "Java",
    "Dart",
    "React.js",
    "Node.js",
    "Angular",
    "Flutter",
    "Firebase",
    "SQL",
    "NoSQL",
    "Docker",
    "Kafka",
    "Redis",
    "Numpy",
    "Pandas",
    "Scikit-Learn",
    "PyTorch",
    "Keras",
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
      location: "Manchester, UK",
      title: "Full Stack and AI Intern",
      logoUrl: "/alteamio_logo.jpeg",
      start: "Dec 2024",
      end: "Present",
      description:
        "Developed and optimized a semantic search feature using LangChain and OpenAI's GPT-4 model, improving user matches by 25%. Enhanced platform performance with React.js, Node.js, and Astro, while optimizing database infrastructure with Postgres and Amazon RDS to reduce query latency by 30%. Streamlined build processes with Bun, cutting build times by 25%, and adhered to Agile and CI/CD practices for efficient feature delivery.",
    },
    {
      company: "SAP Labs India",
      href: "",
      badges: [],
      location: "Bengaluru",
      title: "Associate Software Developer",
      logoUrl: "/sap_logo.png",
      start: "Jul 2022",
      end: "Aug 2023",
      description:
        "Enhanced multi-tenant cloud service with Extensibility feature, improving master data integration. Implemented RESTful APIs and Kafka integration, boosting system scalability. Expanded SAP ODM functionality, increasing system flexibility by 40%. Developed unit tests achieving 90% code coverage, reducing post-deployment issues by 30%. Maintained CI/CD practices using Docker, Jenkins, and GitHub, ensuring consistent development and deployment environments.",
    },
    {
      company: "Barclays",
      badges: [],
      href: "",
      location: "WFH",
      title: "Software Developer Intern",
      logoUrl: "/barclays_logo.png",
      start: "Jun 2021",
      end: "Aug 2021",
      description:
        "Developed an enterprise-level client risk assessment system for loan approvals using Angular, optimizing API data fetching to reduce load times by 25%. Collaborated on integration issue resolution, decreasing bugs by 15%, and improved creditworthiness assessment accuracy by 10%. Managed version control with Git and GitHub, contributing to over 50 successful pull requests.",
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
      title: "Scalable Real-Time Chat App",
      href: "",
      dates: "Oct 2024 - Present",
      active: true,
      description:
        "A scalable real-time chat application built with NextAuth.js for user authentication, Redis Pub/Sub for real-time messaging, Kafka for message processing, and PostgreSQL for persistent data storage.",
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
      title: "App Review Classification Using PLMs",
      href: "",
      dates: "Feb 2024 - Sep 2024",
      active: true,
      description:
        "This project classifies app reviews using fine-tuned models like BERT4RE, ALBERT, and DistilBERT, achieving over 89% F1-score. A Flask app lets users input single or multiple reviews for classification, offering results in text or Excel format, helping developers analyze feedback efficiently.",
      technologies: [
        "Pytorch",
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
