import { Component } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.css"],
})
export class ExperienceComponent {
  Experience = [
    {
      title: "Communications and Internet Network",
      date: "2024/01 – 2024/02",
      Text: [
        "Learned the OSI model and networking fundamentals",
        "Gained knowledge of IPv4, IPv6, and MAC addresses",
        "Understood how computers communicate in a network",
        "Observed and participated in teamwork for problem-solving",
      ],
      img:"../../assets/telecom.png",
      reversed:true,
    },

    {
      title: "Software Engineer (Backend Focus)",
      date: "2025/01 – 2025/02",
      Text: [
        "Created a detailed dashboard with Angular",
        "Managed and optimized the database leveraging MongoDB",
        "Developed robust APIs with Node.js",
        "Contributed to open-source projects",
      ],
      img:"../../assets/logo_bdsi.png",
      reversed:false,
    },
  ];
}
