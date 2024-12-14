import { Component } from '@angular/core';
import {NavbarComponent} from "../../shared/navbar/navbar.component";
import {PageHeadlineComponent} from "../../shared/page-headline/page-headline.component";
import {SwiperFullComponent} from "../../swiper-full/swiper-full.component";

@Component({
  selector: 'app-page-main',
  standalone: true,
  imports: [
    NavbarComponent,
    PageHeadlineComponent,
    SwiperFullComponent
  ],
  templateUrl: './page-main.component.html',
  styleUrl: './page-main.component.css'
})
export class PageMainComponent {

}
