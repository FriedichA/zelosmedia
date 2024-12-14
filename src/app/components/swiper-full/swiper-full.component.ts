import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {config} from "rxjs";
import {RouterModule, RouterOutlet} from "@angular/router";
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-swiper-full',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './swiper-full.component.html',
  styleUrl: './swiper-full.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SwiperFullComponent {

  slides = [
    'assets/images/redbullgmr.jpg',
    'assets/images/slush-d.jpg',
    'assets/images/league-nno-t1.jpg'
  ]
}
