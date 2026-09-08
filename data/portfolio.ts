
export const profile = {
  name: "Falak Sher",
  role: "Full Stack Developer",
  tagline: "React & Next.js Specialist",
  summary:
    "I build fast, accessible interfaces with React and Next.js, and wire them up to Node/Express APIs and MongoDB when the product needs a full stack. Most of my recent work leans frontend — component systems, motion, and state-heavy dashboards.",
  location: "Lahore, Pakistan",
  email: "falaksherdev@gmail.com",
  phone: "+92 322 4511297",
  resumeUrl: "/Falak Sher - Frontend Engineer React JS.pdf",
  availability: "Open to freelance & full-time roles",
  socials: [
    { label: "GitHub", href: "https://github.com/falaksherdev" },
    { label: "LinkedIn", href: "https://linkedin.com/in/falaksherdev" },
    { label: "X", href: "https://x.com/falaksherdev" },
  ],
};

export const skills = {
  frontend: [
    "React.js",
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Redux Toolkit",
    "TanStack Query",
    "TanStack Table",
  ],
  backend: ["Node.js", "Express.js", "MongoDB", "Mongoose", "REST APIs", "JWT Auth"],
  tools: ["Git & GitHub", "Docker", "Figma", "Vercel", "Postman", "Jest"],
};

export type Project = {
  name: string;
  status: "live" | "not-live";
  statusLabel?: string;
  url?: string;
  figmaUrl?: string;
  description: string;
  points: string[];
  tech: string[];
};

export const projects: Project[] = [

  {
    name: "EZ Dubai Visa",
    status: "live",
    url: "https://ezdubaivisa.com",
    description: "A visa services platform with responsive, performance-optimized frontend interfaces.",
    points: [
      "Developed and maintained responsive frontend interfaces across devices",
      "Optimized page performance for a smoother user experience",
    ],
    tech: ["React.js", "REST APIs"],
  },
  {
    name: "Premium Organics",
    status: "live",
    url: "https://premiumorganics.ae/",
    description:
      "A WordPress-based e-commerce website for selling organic dairy products, customized with hand-written CSS and JavaScript to match specific client requirements.",
    points: [
      "Built and customized a WordPress storefront for organic dairy product sales",
      "Wrote custom CSS and JavaScript for design and behavior beyond default theme capabilities",
      "Delivered the site per client-specified requirements and revisions",
    ],
    tech: ["WordPress", "Custom CSS", "JavaScript"],
  },
  {
    name: "Travel UAE",
    status: "live",
    url: "https://traveluae.ae",
    description: "A travel services website built with modern, cross-device UI components.",
    points: [
      "Implemented modern, reusable UI components across the site",
      "Ensured consistent cross-device and cross-browser compatibility",
    ],
    tech: ["React.js"],
  },
  {
    name: "Olympia4FB",
    status: "live",
    url: "https://olympia4fb.com",
    description: "A content-driven website with API-integrated pages.",
    points: [
      "Built fully responsive pages from design to deployment",
      "Integrated API-driven content for dynamic page data",
    ],
    tech: ["React.js", "REST APIs"],
  },
  {
    name: "ArkApp Web Application",
    status: "live",
    url: "https://arkapp-79b00.web.app",
    description: "A React-based web application deployed on Firebase.",
    points: [
      "Developed core frontend features using React.js",
      "Deployed and hosted the application on Firebase",
    ],
    tech: ["React.js", "Firebase"],
  },

  {
    name: "Next.js E-Commerce Store",
    status: "live",
    statusLabel: "Production (IT Extension)",
    url: "#",
    description:
      "A full-featured e-commerce platform built with Next.js, featuring product catalog, shopping cart, and checkout flow.",
    points: [
      "Worked on the frontend of a live e-commerce store using Next.js",
      "Implemented product listing, filtering, and search functionality",
      "Maintained and improved existing codebase during employment",
      "Collaborated with team on feature development and bug fixes",
    ],
    tech: ["Next.js", "React.js", "REST APIs", "CSS"],
  },
  {
    name: "React E-Commerce Application",
    status: "live",
    statusLabel: "Production (IT Extension)",
    url: "#",
    description:
      "A React-based e-commerce web application with dynamic product management and user-facing features.",
    points: [
      "Worked on frontend features for a live React e-commerce site",
      "Implemented dynamic product displays and user interactions",
      "Maintained and enhanced existing components and functionality",
      "Performed bug fixes and performance improvements",
    ],
    tech: ["React.js", "REST APIs", "Custom CSS"],
  },
  {
    name: "SaaS Application Frontend",
    status: "live",
    statusLabel: "Production (IT Extension)",
    url: "#",
    description:
      "A live SaaS application where I worked on frontend features, UI improvements, and user experience enhancements.",
    points: [
      "Contributed to a live SaaS application used by real customers",
      "Implemented new frontend features and UI improvements",
      "Maintained existing React codebase and fixed bugs",
      "Worked on responsive design and cross-browser compatibility",
    ],
    tech: ["React.js", "REST APIs", "SaaS", "Tailwind CSS"],
  },


  {
    name: "OlympiaHub — SaaS Productivity Platform",
    status: "not-live",
    description:
      "A multi-module SaaS productivity platform covering Courses, Kanban Boards, Funnels, Tasks, and Customer Management, currently in active phased development.",
    points: [
      "Designed and developed a scalable UI architecture spanning multiple product modules",
      "Built and integrated backend APIs with Node.js and Express, including JWT authentication, middleware, and role-based access control",
      "Designed MongoDB schemas and data relationships for a modular, scalable system architecture",
      "Integrated RESTful APIs for seamless frontend-backend communication and dynamic data flow",
      "Implemented third-party integrations with Facebook, Instagram, and Google for authentication and external services",
      "Actively contributing to ongoing feature development, system enhancements, and performance optimization",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs", "JWT"],
  },
  {
    name: "TeamsLeader — Workflow & Team Management System",
    status: "not-live",
    description:
      "A team and workflow management system with authentication, API integration, and core task management, later consolidated into the OlympiaHub platform.",
    points: [
      "Developed the system end-to-end using React.js, Node.js, Express.js, and MongoDB",
      "Implemented authentication, API integration, and core task management features",
      "Integrated into OlympiaHub as part of a broader system consolidation effort",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
  },


  {
    name: "Third-Party API Integration Platform",
    status: "not-live",
    statusLabel: "Paused by client",
    description:
      "A web application focused on OAuth-based authentication and secure API communication with Facebook, Instagram, and Google.",
    points: [
      "Built OAuth-based login flows and secure integration with Facebook, Instagram, and Google APIs",
      "Developed the core integration layer for user authentication and external data handling",
      "Delivered an initial working version and handed off core functionality for phased client-side expansion",
    ],
    tech: ["React.js", "Node.js", "REST APIs", "OAuth"],
  },

  {
    name: "TimeBee Dashboard",
    status: "live",
    statusLabel: "Practice Project",
    url: "https://timebeee.netlify.app/",
    figmaUrl: "https://www.figma.com/design/lktIWRyBzG4Z4FO69blNKU/SWAPPROO-Dashboard?node-id=0-1&p=f&t=tRT0hL2lUxb85Z8k-0",
    description: "A fully responsive time tracking and productivity dashboard built from a Figma design as a practice project. Features real-time timers, project analytics, and detailed activity insights.",
    points: [
      "Converted Figma design to fully functional React application",
      "Real-time timer with start/stop and pause functionality",
      "Interactive dashboard with key metrics: Total Time, Timer Time, Manual Time, and Productivity scores",
      "Team Dashboard view for collaborative time management",
      "Top 5 Projects section showing logged hours and productivity rankings",
      "Most Used Websites & Apps tracking with Highest and Lowest Logged Hours analysis",
      "Responsive sidebar navigation with Dashboard, Screenshots, Reports, Time Manager, and Settings",
      "Pixel-perfect implementation following the original Figma design",
    ],
    tech: ["React", "Tailwind CSS", "Custom CSS", "Figma"],
  },
  {
    name: "SWAPPRO Dashboard",
    status: "live",
    statusLabel: "Practice Project",
    url: "https://swappro-dashboard.netlify.app/dashboard/products",
    figmaUrl: "https://www.figma.com/design/lktIWRyBzG4Z4FO69blNKU/SWAPPROO-Dashboard?node-id=0-1&p=f&t=tRT0hL2lUxb85Z8k-0",
    description: "A product management dashboard built from a Figma design as a practice project. Features a clean product listing with filtering, status management, and responsive data tables.",
    points: [
      "Converted Figma design to fully functional React dashboard application",
      "Product listing with key fields: Name, Category, Brand, Variants, and Status",
      "Status indicators (Active/In-active) with visual badges for quick scanning",
      "Pagination for handling large product datasets (10+ entries)",
      "Last Modified tracking for each product",
      "Clean, modern UI with responsive design for all screen sizes",
      "Dark/light theme support with consistent styling",
    ],
    tech: ["React", "Tailwind CSS", "Custom CSS", "Figma"],
  },
];
export type Experience = {
  company: string;
  role: string;
  duration: string;
  location: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    company: "Webhp Solutions",
    role: "Frontend Engineer",
    duration: "Sep 2023 — Present · 3 yrs",
    location: "Lahore, Pakistan",
    points: [
      "Designed and maintained frontend architecture focused on scalability, reusability, and performance",
      "Established coding standards and best practices to improve maintainability and team productivity",
      "Integrated RESTful APIs and collaborated on MERN stack applications with backend teams",
      "Contributed to backend tasks including API integration, authentication flows, and MongoDB data handling",
      "Optimized application performance through component design, state management, and rendering improvements",
      "Conducted code reviews and mentored junior developers to improve the development workflow",
    ],
  },
  {
    company: "iTextention",
    role: "React.js Developer",
    duration: "May 2023 — Sep 2023 · 5 mo",
    location: "Pakistan",
    points: [
      "Developed responsive and accessible user interfaces using React.js",
      "Converted UI/UX designs into reusable and maintainable components",
      "Improved application responsiveness through performance optimization",
      "Collaborated with designers and backend engineers to ship production-ready features",
    ],
  },
  {
    company: "Webhp Solutions",
    role: "Frontend Developer (React.js)",
    duration: "May 2021 — May 2023 · 2 yrs",
    location: "Lahore, Pakistan",
    points: [
      "Built and maintained modern web applications using React.js",
      "Developed reusable component libraries and improved frontend architecture",
      "Integrated REST APIs, ensuring seamless frontend–backend communication",
      "Applied performance optimization techniques and clean code best practices",
    ],
  },
];
export type Education = {
  school: string;
  degree: string;
  duration: string;
  detail?: string;
};

export const education: Education[] = [
  {
    school: "Government College Township, Lahore (Affiliated with University of the Punjab)",
    degree: "Associate Degree, Bachelors in Information Technology",
    duration: "2018 — 2020",

  },
  {
    school: "Government College Township, Lahore",
    degree: "FSc, Pre-Engineering",
    duration: "2016 — 2018",
  },
];
export const additionalExperience: string[] = [
  "Teaching — Mathematics & Computer Science (2020-2021)",
];
export const hobbies: { label: string; note: string }[] = [
  { label: "Badminton", note: "Weekend matches with friends" },
  { label: "Photography", note: "Street & travel shots" },
  { label: "Reading", note: "Sci-fi and system-design books" },
  { label: "Open Source", note: "Small PRs to tools I use" },
  { label: "Gaming", note: "Strategy & RPG games" },
  { label: "Cricket", note: "Weekend matches with friends" },
];
