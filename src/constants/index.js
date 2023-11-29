import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    kotlin,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    sih,
    yi,
    evalley,
    tripguide,
    threejs,
    persistent,
    yi_logo,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "App Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
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
      name: "Kotlin",
      icon: kotlin,
    },
    {
      name: "React JS",
      icon: reactjs,
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
      name: "Java",
      icon: java,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "Young Indians",
      icon: yi_logo,
      iconBg: "#383E56",
      date: "Jan 2023 - Aug 2023",
      points: [
        "Led the development of Yuva Portal, merging React frontend, Node.js/Express.js backend, and MongoDB, .",
        "Engineered Yuva Portal's REST API, integrating user registration, login, activity tracking, and admin CRUD routes.",
        "Spearheaded the development and launch of a dynamic quiz-based certification system, driving a 40% increase in user engagement.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "E-valley",
      icon: sih,
      iconBg: "#E6DEDD",
      date: "Oct 2022 - Dec 2023",
      points: [
        "Showcased this project at Smart India Hackathon 2022, emerging as finalists..",
        "Created slot booking website empowering street vendors to reserve market slots across cities innovatively.",
        "Executed user-friendly interface and REST API integration, enhancing project usability and accessibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Martian Summer Internship",
      company_name: "Persistent Systems",
      icon: persistent,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Completed an 8-week training program covering Linux, Core Java, Data Structures and Algorithms (DSA), and Database Management Systems (DBMS).",
        "Acquired hands-on experience in Linux, focusing on system administration tasks and command-line operations.",
        "Demonstrated proficiency in Core Java through practical projects, including application development and optimization.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
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
      name: "Young Indians",
      description:
        "This is a hosted web portal for the Yi orgaisation and Young Indians team made under CII guidance which includes providing awareness about multiple domains of science and life skill through videos and activities.",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: yi,
      source_code_link: "https://github.com/yuva-portal/",
    },
    {
      name: "Evalley",
      description:
        "Our project, presented at Smart India Hackathon 2022, reached the finals. We developed a slot booking website empowering street vendors to reserve market slots across cities, providing an innovative solution to enhance their accessibility and efficiency..",
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
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: evalley,
      source_code_link: "https://github.com/abhishekjaiswal777ab/EvalleyWebsite",
    },
    // {
    //   name: "Trip Guide",
    //   description:
    //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    //   tags: [
    //     {
    //       name: "nextjs",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: "supabase",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "css",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: tripguide,
    //   source_code_link: "https://github.com/",
    // },
  ];
  
  export { services, technologies, experiences, testimonials, projects };