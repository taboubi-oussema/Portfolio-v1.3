import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.css"],
})
export class SkillsComponent {
  skills = [
    {
      image: "../../assets/js.png",
      name: "Javascript",
    },
    {
      image: "../../assets/express.png",
      name: "Express.js",
    },
    {
      image: "../../assets/mongodb.png",
      name: "MongoDB",
    },
    {
      image: "../../assets/nodejs.png",
      name: "Node.js",
    },
    {
      image: "../../assets/angular.png",
      name: "angular",
    },
  ];
}
