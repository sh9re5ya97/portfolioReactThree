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
    carrent,
    jobit,
    tripguide,
    threejs,
    cg,
    cg_nobg
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
      title: "Front End Engineering",
      icon: web,
    },
    {
      title: "Adaptive Web Development",
      icon: mobile,
    },
    {
      title: "Creative Interface Design",
      icon: backend,
    },
    {
      title: "Dynamic Animation and Interaction",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Associate SDE",
      company_name: "CG Infinity",
      icon: cg_nobg,
      iconBg: "#383E56",
      date: "April 2022 - October 2023",
      points: [
        {name:"Siepe",desc:"Developed and maintained user interfaces, implemented UI/UX designs, and ensured seamless user experiences.Executed thorough testing and debugging processes to optimize performance and promptly address any issues that arose.Led the Proof of Concept (POC) for label mapping using fabricjs, resulting in improved efficiency."},
        {name:"Gas South",desc:"Contributed to the migration and integration of Salesforce into the Energy and Utility Cloud, focusing on smooth data transition and collaborative efforts for improved operational efficiency. Responsible for the creation and management of user roles and permissions, prioritizing a secure and user-friendly experience."},
      ]
      },
    {
      title: "Consultant 2 SDE",
      company_name: "CG Infinity",
      icon: cg_nobg,
      iconBg: "#383E56",
      date: "April 2021 - April 2022",
      points: [
        {name:"AMOS",desc:"Enhanced and supported the admin portal, conducted mobile app testing, and performed bug fixes.Contributed to database architecture, backend development (APIs, etc.), and Azure deployment."},
        {name:"Brinks Security",desc:"Automated processes and utilized SPs, SQL, C#, .NET, Vue Nuxt, Contentful, and Azure."},
        {name:"Orthofix",desc:"Developed a Vue portal from scratch and utilized PowerBI for reports, roles, and embedded reports."}
      ],
    },
    {
      title: "Consultant 1 SDE",
      company_name: "CG Infinity",
      icon: cg_nobg,
      iconBg: "#383E56",
      date: "June 2019 - April 2021",
      points: [
        {name:"BDF",desc:"Conducted front-end development of new features and bug fixes using Angular 6."},
        {name:"Dell Insight",desc:"Provided front-end development and support in Angular 6."},
        {name:"Associa",desc:"Engaged in C# and .NET development, REST API development, and maintenance."},
        {name:"Smart Track DNA",desc:"Developed an admin portal from scratch using Angular 8 and provided ongoing support."},
        {name:"Just Energy",desc:"Utilized .NET C#, SOAP API, and database queries for development tasks"},
      ],
    }
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };