import { Component } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent {
  Experience = [
    {
      title: "Software Engineer (Backend Focus)",
      date: "2025/01 – 2025/02",
      Text: [
        "Created a detailed dashboard with Angular",
        "Managed and optimized the database leveraging MongoDB",
        "Developed robust APIs with Node.js",
        "Contributed to open-source projects",
      ],
    },
  ];
}
