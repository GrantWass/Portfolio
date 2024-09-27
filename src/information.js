export const education = [
  {
    title: "Raikes School of Computer Science at UNL",
    shortTitle: "Raikes School at UNL",
    description:
      "Majors in Computer Science, Data Science, Mathematics with a minor in Business",
    shortDesc: "Computer Science, Data Science, Math",
    date: "May 2026",
    technologies: null,
    highlights: [
      "Participating in a prestigious interdisciplinary honors program emphasizing collaborative group projects, leadership skills, and practical applications of advanced computing concepts.",
      "Relevant Coursework: Design & Analysis of Algorithms, Programming Language Concepts, Software Development, Data & Models, Statistics, Stochastic Processes, Software Engineering, Design Studio, and Linear Algebra.",
      "Awards & Honors: Recognized on the BIG 10 All-Academic Team, BIG 10 Distinguished Scholar, Dean's List, and National Merit Scholar.",
      "Academic Interests: Web Development, Software Engineering, Algorithms, Machine Learning, and Artificial Intelligence.",
      "Extracurricular Involvement: Student-Athlete competing in Track and Cross Country; Active member of the Inner Circle (Professional Development Club).",
    ],
    gpa: "GPA: 3.96/4.00",
    main_image: "/raikes.jpg",
    images: [null],
  },
];

export const work_experience = [
  {
    title: "Speedway Motors",
    role: "Software Developer",
    date: "May 2024 – Current",
    technologies: ["React", "Javascript", "C#", ".NET", "Azure"],
    highlights: [
      "Initiated and documented the migration process from a legacy front-end state management system to a modern framework, significantly reducing unnecessary re-renders and enhancing code readability.",
      "Designed and executed A/B tests across the product page to drive user engagement and conversion rates through data-driven experiments, with one experiemtn achieving a 6% increase in add-to-cart rates.",
      "Resolved discrepancies in the order tracking system, implementing solutions that provided comprehensive tracking information for seven shipping providers and improved user satisfaction.",
      "Gained practical experience in full-stack development, addressing both front-end and back-end challenges using React and C#/.NET.",
      "Adopted Agile methodologies, contributing to sprint planning, running stand-ups, and creating actionable tasks based on feedback from customers and managers.",
      "Embraced opportunities to develop in new languages, leveraging mentorship and collaboration to gain valuable domain knowledge and solve complex problems.",
    ],
    main_image: "/speedway.jpg",
    images: [null],
  },
  {
    title: "Design Studio – Kiewit",
    role: "Software Developer",
    date: "September 2024 – Current",
    technologies: ["Unity", "C#", "Agile", "UX/UI Design"],
    highlights: [
      "Developing an innovative virtual reality environment in Unity (C#) to enhance recruitment and onboarding processes, aimed at increasing engagement and conversion rates.",
      "Collaborating with sponsors and users to define user stories and translate them into actionable development tasks, ensuring alignment with both technical and business objectives.",
      "Preparing the project for successful hand-off by implementing a modular architecture with comprehensive documentation and robust design patterns.",
      "Ensuring the project's adaptability and longevity through strategic planning for scalability and reusability, facilitating future team development and enhancements.",
    ],
    main_image: "/kiewit.png",
    images: [null],
  },
];

export const projects = [
  {
    title: "Personal Running Interface",
    build: "JavaScript React | Python Flask",
    description:
      "A sophisticated web interface designed to track and analyze running activities, providing elite runners with detailed visualizations and performance analytics.",
    date: "April 2024",
    technologies: [
      "React",
      "Python",
      "Garmin Connect API",
      "Google Maps API",
      "Flask",
    ],
    highlights: [
      "Incorporated feedback from runners and adhered to UI best practices to design an intuitive interface that showcases recent activities and facilitates in-depth analysis and visualization of fitness data.",
      "Optimized large API requests, achieving up to a 5x reduction in response times through caching, batched requests, and other performance enhancements.",
      "Leveraged the Garmin Connect API to integrate personal running data and combined it with spatial data from the Google Maps API to create an insightful heatmap of popular running routes and area's explored.",
    ],
    main_image: "/homepage.png",
    images: [
      "/homepage.png",
      "/heatmap.png",
      "/discovery.png",
      "/interface.png",
    ],
  },
  {
    title: "Secret Gitler",
    build: "TypeScript React | Express",
    description:
      "A browser-based, turn-based multiplayer game inspired by Secret Hitler, featuring complex interactions and hidden identities.",
    date: "January 2024",
    technologies: [
      "React",
      "Express",
      "WebSockets",
      "MongoDB",
      "Typescript",
      "Redux",
    ],
    highlights: [
      "Implemented real-time multiplayer functionality using WebSockets and state management systems, replicating interactive gameplay with visual player roles, conditional gameplay states, and concealed identities.",
      "Developed a robust user profile system with secure authentication and login states, incorporating password encryption to ensure data protection and user privacy.",
    ],
    main_image: "/defaultGame.png",
    images: [
      "/gitlerHome.png",
      "/identity.png",
      "/defaultGame.png",
      "/hiddenGame.png",
      "/tooltip.png",
      "/cardPick.png",
    ],
  },
  {
    title: "House Affordability Predictor",
    build: "Python | TensorFlow & Scikit-learn",
    description:
      "A predictive tool for real estate affordability, utilizing machine learning models and existing databases to forecast property affordability.",
    date: "March 2024",
    technologies: [
      "Python",
      "Machine Learning",
      "TensorFlow",
      "Deep Nueral Networks",
    ],
    highlights: [
      "Applied accuracy metrics and data visualization techniques to evaluate the practical applications of the model's predictions, exploring both classification and regression aspects of neural networks.",
      "Enhanced model accuracy by 50% through meticulous feature engineering, hyperparameter tuning, and cross-validation, refining predictive performance and reliability.",
    ],
    main_image: "/data.png",
    images: [null],
  },
  {
    title: "Mock Compiler",
    build: "Java",
    description:
      "A functional compiler designed for type checking, parsing, and lexical analysis, simulating the process of code compilation with robust features.",
    date: "March 2024",
    technologies: ["Java", "Object Oriented Principles"],
    highlights: [
      "Engineered and implemented the compiler's architecture, emphasizing modularity and scalability by adhering to DRY, SRP, and SOLID principles.",
      "Optimized recursion logic for parsing nested expressions, significantly improving maintainability and performance.",
    ],
    main_image: "/parser.png",
    images: [null],
  },
];
