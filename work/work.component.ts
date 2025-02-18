import { Component } from "@angular/core";

@Component({
  selector: "app-work",
  templateUrl: "./work.component.html",
  styleUrls: ["./work.component.css"],
})
export class WorkComponent {
  projects = [
    {
      title: "Social Media Backend API",
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
      link: "https://github.com/taboubi-oussema/-Social-Media-Backend-API",
    },
  ];
}
