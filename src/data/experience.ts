export type Experience = {
  period: string;
  title: string;
  company: string;
  location?: string;
  summary: string;
  details: string[];
  highlights: string[];
};

export const experience: Experience[] = [
  {
    period: "2023 — Present",
    title: "Senior Full Stack Developer",
    company: "MOST Programming",
    location: "United States",
    summary:
      "Owned modern web apps for a large-scale construction platform — React, TypeScript, Next.js, Node.js, GraphQL, and PostgreSQL — plus WebGL/Three.js visualizations for interactive construction models.",
    details: [
      "Worked on a large-scale construction management platform used by enterprise customers across North America. Owned the development of modern web applications, focusing on performance, scalability, and complex business workflows.",
      "Built and maintained full-stack applications using React, TypeScript, Next.js, Node.js, GraphQL, PostgreSQL, and cloud services. Developed reusable frontend architectures, optimized API performance, improved data-fetching strategies, and implemented scalable backend services.",
      "Worked on advanced visualization features using WebGL and Three.js to create interactive 3D experiences for construction models and complex data visualization. Improved rendering performance through optimized scene management, lazy loading, and efficient client-side processing.",
      "Collaborated with product, design, and engineering teams to deliver high-quality features, improve system reliability, and solve complex technical challenges in a large enterprise environment.",
    ],
    highlights: [
      "Improved application performance by optimizing frontend rendering, API calls, and database queries.",
      "Built scalable reusable components used across multiple enterprise applications.",
      "Delivered interactive WebGL-based visualization features for complex construction data.",
    ],
  },
  {
    period: "2021 — 2023",
    title: "Full Stack Engineer",
    company: "Booking.com",
    location: "Netherlands (Global)",
    summary:
      "Built high-traffic customer-facing apps with React, TypeScript, and Redux on the frontend and Node.js, Java, and microservices on the backend, focusing on reliability and performance at global scale.",
    details: [
      "Developed high-traffic customer-facing web applications supporting millions of users worldwide. Worked across frontend and backend systems to improve reliability, performance, and user experience.",
      "Created responsive frontend experiences using React, TypeScript, Redux, and modern CSS frameworks. Developed backend services using Node.js, Java, REST APIs, microservices architecture, and cloud infrastructure.",
      "Designed and implemented scalable APIs, improved service communication, and contributed to performance optimization initiatives. Worked closely with distributed engineering teams following Agile and DevOps practices.",
    ],
    highlights: [
      "Delivered features for high-volume web applications with strong performance requirements.",
      "Improved frontend performance through code splitting, caching strategies, and optimization techniques.",
      "Developed backend services supporting reliable global user experiences.",
    ],
  },
  {
    period: "2020 — 2021",
    title: "Full Stack Developer",
    company: "Grab",
    location: "Singapore (Global)",
    summary:
      "Enhanced web platforms for transportation, delivery, and fintech products using React, TypeScript, Node.js, and Python — including real-time features, performance work, and stronger testing and monitoring.",
    details: [
      "Built and enhanced web platforms supporting transportation, delivery, and financial technology products. Focused on developing scalable full-stack solutions and improving engineering efficiency.",
      "Developed frontend applications using React, JavaScript, TypeScript, and component-based architectures. Built backend APIs and services using Node.js, Python, REST APIs, databases, and cloud platforms.",
      "Implemented real-time features, optimized application performance, and improved system reliability through monitoring, testing, and automation.",
    ],
    highlights: [
      "Built scalable features used by large numbers of daily active users.",
      "Improved application stability through better testing and monitoring practices.",
      "Worked across frontend and backend systems to deliver end-to-end solutions.",
    ],
  },
  {
    period: "2019 — 2020",
    title: "Full Stack Developer",
    company: "Jellyfish Technologies",
    location: "Global Delivery",
    summary:
      "Delivered enterprise apps for international clients with React, Angular, Node.js, and .NET Core — from interactive dashboards and secure APIs to Docker-based CI/CD and production support.",
    details: [
      "Worked with international clients to design and develop enterprise web applications. Delivered complete solutions from frontend interfaces to backend services and cloud deployment.",
      "Developed applications using React, Angular, Node.js, .NET Core, REST APIs, SQL databases, Docker, and CI/CD pipelines. Participated in architecture discussions, technical planning, and production support.",
      "Built interactive dashboards, optimized backend performance, and implemented secure API integrations.",
    ],
    highlights: [
      "Delivered multiple enterprise applications for global customers.",
      "Improved development efficiency through reusable components and automation.",
      "Supported production systems and resolved complex technical issues.",
    ],
  },
];
