import { Component, OnInit } from "@angular/core";
import * as AOS from "aos";
@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"],
})
export class WorkComponent implements OnInit {
  ngOnInit() {
    AOS.init();
  }
  projects = [
    {
      title: "Clone API LinkedIn",
      Website: false,
      reversed: false,
      description: [
        "Comprehensive RESTful API clone of LinkedIn built with Node.js, Express, and MongoDB",
        "User authentication and profile management with experience and skills",
        "Posts functionality with comments and likes",
        "Connection requests and messaging system",
        "Job postings with applications",
        "Implements security best practices, error handling, and data validation",
      ],
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Mongoose",
        "bcrypt",
        "nodemon",
        "dotenv",
      ],
      imageUrl: "../../assets/LinkedIn web app.png",
      linkGit: "https://github.com/taboubi-oussema/linkedin-api-clone",
    },
    {
      title: "Social Media Backend API",
      Website: false,
      reversed: true,
      description: [
        "Robust backend API for social media application",
        "Comprehensive user management system",
        "Secure authentication and authorization",
        "Efficient data handling and storage",
        "File upload capabilities with Multer",
      ],
      technologies: [
        "nodemon",
        "bcryptjs",
        "dotenv",
        "express",
        "express-async-handler",
        "joi",
        "jsonwebtoken",
        "mongoose",
        "multer",
      ],
      imageUrl:
        "../../assets/DALL·E 2025-02-18 19.07.36 - A high-tech digital network visualizing a Social Media Backend API. The image features interconnected API endpoints, database symbols, cloud computing.webp",
      linkGit: "https://github.com/taboubi-oussema/-Social-Media-Backend-API",
    },
    {
      title: "Real-Time Chat Application API",
      Website: true,
      reversed: false,
      description: [
        "Real-time messaging platform using WebSocket technology",
        "Secure user authentication system",
        "Multiple chat room support",
        "Instant message delivery and notifications",
        "Responsive chat interface design",
      ],
      technologies: [
        "nodemon",
        "dotenv",
        "express",
        "Socket.io",
        "mongoose",
        "Angular",
        "Bootstrap",
      ],
      imageUrl: "../../assets/Real-Time Chat Application APIs.png",
      linkWeb:
        "https://real-time-chat-application-api-production-9728.up.railway.app/",
      linkGit:
        "https://github.com/taboubi-oussema/Real-Time-Chat-Application-API",
    },
    {
      title: "Portfolio Website",
      Website: true,
      reversed: true,
      description: [
        "Clean and responsive personal portfolio website",
        "Showcases projects and skills effectively",
        "Optimized for all screen sizes",
        "Modern and intuitive user interface",
        "Interactive sections for biography and projects",
      ],
      technologies: ["HTML", "CSS", "JAVASCRIPT", "Font Awesome"],
      imageUrl: "../../assets/personal profile website .png",
      linkWeb: "https://taboubi-oussema.github.io/Portfolio-v1.1/",
      linkGit: "https://github.com/taboubi-oussema/Portfolio-v1.1",
    },
    {
      title: "Fun Geography Competition Game",
      Website: true,
      reversed: false, 
      description: [
        "Interactive country guessing game",
        "Visual clues through country images",
        "Instant feedback on user guesses",
        "Educational and entertaining gameplay",
        "Progressive difficulty levels",
      ],
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      imageUrl: "../../assets/Geography Competition game .png",
      linkWeb: "https://taboubi-oussema.github.io/Geography-competition/",
      linkGit: "https://github.com/taboubi-oussema/Geography-competition",
    },
    {
      title: "Admin Dashboard",
      Website: true,
      reversed: true,
      description: [
        "Comprehensive administrative interface",
        "Data visualization with Ngx Charts",
        "Responsive and modern design",
        "Intuitive navigation system",
        "Consolidated metrics and analytics",
      ],
      technologies: [
        "Angular",
        "CSS",
        "Ngx Charts",
        "Font Awesome",
        "Bootstrap",
      ],
      imageUrl: "../../assets/DashStack.png",
      linkWeb: "https://taboubi-ousama-admin-dashb0ard.web.app/",
      linkGit: "https://github.com/taboubi-oussema/Admin-Dashboard",
    },
  ];
}
