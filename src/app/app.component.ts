import {Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import {SwiperFullComponent} from "./components/swiper-full/swiper-full.component";
import {PageHeadlineComponent} from "./components/shared/page-headline/page-headline.component";
import {PageMainComponent} from "./components/landing-page/page-main/page-main.component";
import {PageServicesComponent} from "./components/landing-page/page-services/page-services.component";
import {LandingPageComponent} from "./components/landing-page/landing-page.component";
import {TeamComponent} from "./components/landing-page/page-about-us/team/team.component";
import {NgIf} from "@angular/common";
import {FooterComponent} from "./components/shared/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SwiperFullComponent, PageHeadlineComponent, PageMainComponent, PageServicesComponent, LandingPageComponent, TeamComponent, NgIf, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class AppComponent{
  title = 'zelosmedia-mainsite';

  @ViewChild('landingPage') landingPage: LandingPageComponent | undefined;

  onNavigate(componentId: string) {
    // @ts-ignore
    this.landingPage.onNavigate(componentId);
  }
}
