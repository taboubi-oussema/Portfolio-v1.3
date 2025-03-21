import { Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  ngOnInit() {
    const container = document.getElementById('lottie');
    if (container) {
      lottie.loadAnimation({
        container: container, // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/home_1.json', // the path to the animation json
      });
    }
  }

}
