import { Component, OnInit } from '@angular/core';
import lottie from 'lottie-web';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit{
  ngOnInit() {
    const container = document.getElementById('lottie');
    if (container) {
      lottie.loadAnimation({
        container: container, // the DOM element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/404.json', // the path to the animation json
      });
    }
  }

}
