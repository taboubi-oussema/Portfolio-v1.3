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
      title: "Social Media Backend API",
      Website: false,
      reversed: false,
      description:
        "This is the backend API for a social media application that provides a range of powerful features to users. API is designed to provide a seamless and efficient experience, allowing users to interact with the app in meaningful ways.",
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
      reversed: true,
      description:
        "Developing  a chat platform that enables users to communicate instantly. This project involves setting up a server with WebSocket for real-time messaging, implementing secure user authentication, designing a functional chat interface, and managing various chat rooms.",
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
      title: "Portfolio Website ",
      Website: true,
      reversed: false,
      description:
        "This project is a personal profile website I created to showcase my skills and interests. it features a clean and responsive design that adapts to various screen sizes. The site includes sections for my biography, skills, and projects, providing a comprehensive view of my background and capabilities.",
      technologies: ["HTML", "CSS", "JAVASCRIPT", "Font Awesome"],
      imageUrl: "../../assets/personal profile website .png",
      linkWeb: "https://taboubi-oussema.github.io/Portfolio-v1.1/",
      linkGit: "https://github.com/taboubi-oussema/Portfolio-v1.1",
    },
    {
      title: "Fun Geography Competition Game",
      Website: true,
      reversed: true,
      description:
        "The Geography Competition is a simple yet engaging game where players guess the name of a country based on an image. It challenges users to identify various countries through visual clues, enhancing their geographical knowledge while having fun. The game is designed to be interactive and educational, providing instant feedback on guesses.",
      technologies: ["HTML", "CSS", "JAVASCRIPT"],
      imageUrl: "../../assets/Geography Competition game .png",
      linkWeb: "https://taboubi-oussema.github.io/Geography-competition/",
      linkGit: "https://github.com/taboubi-oussema/Geography-competition",
    },
    {
      title: "Admin Dashboard",
      Website: true,
      reversed: false,
      description:
        "An Admin Dashboard is a user interface (UI) designed to provide administrators with a comprehensive overview and control over a system or application. It consolidates data, metrics, and key functions into a single, easy-to-navigate interface.",
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
