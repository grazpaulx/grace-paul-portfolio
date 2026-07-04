// All content sourced directly from Grace Paul's resume.
// Edit this file to update any text shown on the site.

export const profile = {
  name: "Grace Paul",
  title: "B.Tech Computer Science Engineering (Minor: Electronics & Communication)",
  cgpa: "9.5",
  location: "Thrissur, Kerala",
  phone: "+91 91882 22853",
  email: "gracepaulpottakkal3@gmail.com",
  linkedin: "linkedin.com/in/gracepaul3",
  linkedinUrl: "https://linkedin.com/in/gracepaul3",
  github: "github.com/grazpaulx",
  githubUrl: "https://github.com/grazpaulx",
  summary:
    "B.Tech Computer Science student with a Minor in Electronics & Communication (CGPA: 9.5) with hands-on experience across full-stack development and machine learning, including a multi-month industry training program and an AI/ML internship. Skilled in building end-to-end web applications with React and REST APIs, and exploring ML workflows using Python. Active tech community leader and multi-time hackathon finalist, eager to contribute to real-world software projects.",
  photo: "/images/profile.jpg"
};

export const skills = [
  {
    group: "Frontend",
    items: ["React", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
  },
  {
    group: "Backend",
    items: ["Node.js", "ASP.NET Core"]
  },
  {
    group: "Languages",
    items: ["Python (Pandas, NumPy, Scikit-learn)", "Java", "JavaScript", "C"]
  },
  {
    group: "Databases & Tools",
    items: ["MySQL", "MongoDB", "Git", "REST APIs", "Figma", "MATLAB"]
  }
];

export const projects = [
  {
    id: "thermasense",
    name: "ThermaSense",
    tagline: "Predictive Cooling AI Mini Project",
    category: "Academic",
    tech: ["Python", "LSTM", "Pandas", "NumPy"],
    description: [
      "Built a stacked LSTM deep learning model in Python to forecast data center thermal load patterns, using a real-world thermal dataset sourced from Kaggle.",
      "Designed the preprocessing and training pipeline, with model performance assessed using standard regression metrics (MAE, RMSE, R²).",
      "Aimed at enabling predictive cooling optimization and reducing simulated energy consumption through proactive, forecast-driven cooling control in data center environments."
    ],
    repo: null
  },
  {
    id: "careflow",
    name: "CareFlow",
    tagline: "AI Intelligent Caregiver — Hackathon, RSET Kochi",
    category: "Hackathon",
    tech: ["React", "FastAPI", "Groq API"],
    description: [
      "Developed an AI-driven caregiver workload optimization engine for elderly care using React, FastAPI, and the Groq API.",
      "Automated intelligent task scheduling and caregiver assignment based on real-time patient needs."
    ],
    repo: null
  },
  {
    id: "credifai",
    name: "CredifAi",
    tagline: "Fake News Detector — Hackathon, VIT Chennai",
    category: "Hackathon",
    tech: ["React", "Node.js", "ML Classifier", "NLP"],
    description: [
      "Built an NLP-powered misinformation detection system with a React frontend and Node.js backend, integrating a machine learning classifier to flag fake news in real time.",
      "Presented at a national-level hackathon at VIT Chennai, competing among 300+ teams."
    ],
    repo: null
  },
  {
    id: "trash2cash",
    name: "Trash2Cash",
    tagline: "AI Waste Management — National Hackathon",
    category: "Hackathon",
    tech: ["React", "MongoDB", "Recommendation Engine"],
    description: [
      "Designed an AI-based waste classification web app using React and MongoDB, enabling users to identify waste categories and earn recycling incentives through an intelligent recommendation engine.",
      "Selected for presentation at a national-level hackathon, competing against teams from across the country."
    ],
    repo: null,
    image: "/images/trash2cash-presentation.jpg"
  },
  {
    id: "prescripto",
    name: "Prescripto",
    tagline: "Personal Project",
    category: "Personal",
    tech: ["React", "Node.js"],
    description: [
      "Details coming soon — repository and write-up to be added."
    ],
    repo: null,
    placeholder: true
  },
  {
    id: "abaja",
    name: "A-BAJA Speed Tracker",
    tagline: "Software Team — A-BAJA Autonomous Vehicle Competition",
    category: "Academic",
    tech: ["Embedded Systems", "C"],
    description: [
      "Details coming soon — repository and write-up to be added."
    ],
    repo: null,
    placeholder: true
  }
];

export const experience = [
  {
    id: "iiit-kottayam",
    role: "IoT Intern",
    org: "IIIT-Kottayam (PM VIKAS Program)",
    period: "Jun 2026 – Aug 2026 (Ongoing)",
    meta: "Offline internship with stipend, 1.5 months",
    points: [
      "Selected for an offline IoT internship at IIIT-Kottayam under the PM VIKAS Program, covering Electronics, Networking, Arduino Programming, and hands-on project modules.",
      "Building foundational knowledge in electronics and embedded systems as part of the program's structured curriculum, progressing toward hardware-based IoT projects."
    ],
    link: "/pmvikas",
    linkLabel: "View internship log"
  },
  {
    id: "techmaghi",
    role: "Full Stack Development Training",
    org: "Techmaghi",
    period: "Dec 2024 – Apr 2025",
    meta: null,
    points: [
      "Completed a 2-month full-stack development training program, followed by a 1-month independent project building ShopEase, a full-stack e-commerce platform (React, ASP.NET Core, SQL Server).",
      "Built core e-commerce functionality including product catalog, shopping cart, user authentication, and an admin dashboard for inventory and order management.",
      "Designed and integrated 10+ REST API endpoints connecting the React frontend to the ASP.NET Core backend; optimized SQL queries and improved UI responsiveness using Tailwind CSS."
    ]
  },
  {
    id: "riss",
    role: "AI/ML Intern",
    org: "Riss Technologies",
    period: "Jul 2024 (2 weeks)",
    meta: null,
    points: [
      "Completed a 2-week introductory internship focused on understanding real-world ML workflows, including walkthroughs of in-progress company projects such as tumor detection (image data) and fake news detection.",
      "Independently explored and cleaned real-world datasets using Pandas and NumPy, applying data preprocessing techniques as part of structured exercises."
    ],
    image: "/images/riss-cert.jpg"
  }
];

export const education = [
  {
    id: "cce",
    degree: "B.Tech in Computer Science and Engineering",
    detail: "CGPA: 9.5",
    school: "Christ College of Engineering (Autonomous), Irinjalakuda",
    period: "2023 – 2027",
    points: [
      "Class Topper for 2 semesters",
      "IEEE Computer Society, CCE — Vice Chairperson (2024–25), Secretary (2025–26)",
      "NSS Volunteer Secretary (2025–26)",
      "Techfest Volunteer Lead",
      "AI & ML 3-Day Workshop Coordinator"
    ]
  },
  {
    id: "hss",
    degree: "Higher Secondary Education (Science)",
    detail: "98.9%",
    school: "Don Bosco Higher Secondary School, Irinjalakuda",
    period: "2023",
    points: []
  }
];

export const achievements = [
  {
    title: "1st Place — IEEE CUSAT SB Inter-College Quiz Competition",
    detail: "Chrono Code: Time Travel Through Tech quiz, IEEE CUSAT SB",
    image: "/images/chronocode-winners.jpg"
  },
  {
    title: "2nd Place — Inquest (Ideas & Debate Competition)",
    detail: "IEEE MEA Student Branch, MEA Engineering College",
    image: "/images/inquest-winners.jpg"
  },
  {
    title: "2nd Place — Mobile App Dev Idea Phase",
    detail: "Idea-phase mobile app development competition",
    image: null
  },
  {
    title: "Finalist — Multiple national & international hackathons",
    detail: "AI, VR, and Mobile App tracks",
    image: null
  },
  {
    title: "Software Team Contributor — A-BAJA Autonomous Vehicle Competition",
    detail: null,
    image: null
  }
];

export const certifications = [
  {
    title: "Digital Circuits, Computer Architecture, Integrated Circuits, Mosfets, OP-Amps and Their Applications",
    issuer: "NPTEL"
  },
  {
    title: "Foundations: Data, Data, Everywhere",
    issuer: "Google (Coursera)"
  },
  {
    title: "Fundamentals of Generative AI for Beginners",
    issuer: "AWS (Coursera)"
  },
  {
    title: "Introduction to Software Engineering",
    issuer: "IBM (Coursera)"
  },
  {
    title: "Hands-on Training: Web Development, AI/ML, Mobile App Development, VR App Development",
    issuer: "Christ College of Engineering"
  }
];

export const additional = {
  languages: ["English (Fluent)", "Malayalam (Native)"],
  competencies: [
    "Leadership",
    "Analytical Thinking",
    "Problem-Solving",
    "Agile Collaboration",
    "Communication",
    "Time Management"
  ],
  hobbies: [
    "Canva Poster Designing",
    "Solving Puzzles",
    "Hackathon Participation",
    "Exploring AI & Full-Stack Technologies"
  ]
};

// Photos from hackathons, workshops and college life — shown in the closing gallery.
export const galleryPhotos = [
  { src: "/images/chronocode-winners.jpg", caption: "1st place — Chrono Code Quiz, IEEE CUSAT SB" },
  { src: "/images/inquest-winners.jpg", caption: "2nd place — Inquest, IEEE MEA Student Branch" },
  { src: "/images/trash2cash-presentation.jpg", caption: "Presenting Trash2Cash at a national hackathon" },
  { src: "/images/icset.jpg", caption: "ICSET 9th Edition — International Conclave, ICT Academy of Kerala" },
  { src: "/images/riss-cert.jpg", caption: "AI/ML internship completion — Riss Technologies" },
  { src: "/images/award-1.png", caption: "Certificate presentation, Christ College of Engineering" },
  { src: "/images/award-2.png", caption: "Recognition at Christ College of Engineering" },
  { src: "/images/award-3.png", caption: "Team recognition with faculty" },
  { src: "/images/friends.jpg", caption: "With the IEEE Computer Society team, CCE" }
];
