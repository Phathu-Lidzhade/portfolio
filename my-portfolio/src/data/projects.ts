export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageFolder: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    title: "Student Residence Allocation System",
    description: "A web application that allows students ro apply for residence while administrators manage application and residence allocation",
    technologies: ["PHP", "MySQL", "Javascript", "Html", "CSS", "XAMPP"],
    imageFolder: "residence",
    githubUrl: "https://github.com/Phathu-Lidzhade/student-residence-application-system.git",
  },
  {
    title: "Online Pharmacy",
    description: "An e-commerce style pharmacy system where users can browse products, place orders, and view their order history",
    technologies: ["PHP", "MySQL", "Javascript", "Html", "CSS", "XAMPP"],
    imageFolder: "pharmacy",
    githubUrl: "https://github.com/Phathu-Lidzhade/health-website-project.git",
  },
  {
    title: "Gym Management System",
    description: "A gym management platform for managing workout plans, routines, recommendations, and class schedules",
    technologies: ["PHP", "MySQL", "Javascript", "Html", "CSS", "XAMPP"],
    imageFolder: "gym",
    githubUrl: "https://github.com/Phathu-Lidzhade/world-of-fitness.git",
  },
  {
    title: "Monate Restaurant website",
    description: "A Restaurant website designed to allow customers to explore the menu and place food orders online",
    technologies: ["PHP", "MySQL", "Javascript", "Html", "CSS", "XAMPP"],
    imageFolder: "monate",
    githubUrl: "https://github.com/Phathu-Lidzhade/monate-website.git",
  },
];

export default projects;