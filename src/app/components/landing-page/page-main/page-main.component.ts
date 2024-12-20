import {Component, ElementRef, HostListener} from '@angular/core';
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
  public isSticky: boolean = false;

  constructor(public el: ElementRef) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= this.el.nativeElement.getBoundingClientRect().top;
  }
}
