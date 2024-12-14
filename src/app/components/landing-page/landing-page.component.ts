import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, Renderer2} from '@angular/core';
import {PageMainComponent} from "./page-main/page-main.component";
import {PageServicesComponent} from "./page-services/page-services.component";
import {PageReferencesComponent} from "./page-references/page-references.component";
import {PageAboutUsComponent} from "./page-about-us/page-about-us.component";
import {window} from "rxjs";
import {ScrollService} from "../../services/scroll.service";
import {Router, RouterLink} from "@angular/router";
import {FooterComponent} from "../shared/footer/footer.component";
import {ContactComponent} from "../contact/contact.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    PageMainComponent,
    PageServicesComponent,
    PageReferencesComponent,
    PageAboutUsComponent,
    RouterLink,
    FooterComponent,
    ContactComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

  constructor(private scrollService: ScrollService, private router: Router) {
  }


  @ViewChild('mainComponent', { read: ElementRef }) mainComponent: ElementRef | undefined;
  @ViewChild('servicesComponent', { read: ElementRef }) servicesComponent: ElementRef | undefined;
  @ViewChild('referencesComponent', { read: ElementRef }) referencesComponent: ElementRef | undefined;
  @ViewChild('aboutUsComponent', { read: ElementRef }) aboutUsComponent: ElementRef | undefined;


  navigateAndScroll(id: string): void {
    this.router.navigate([], { fragment: id });
    this.scrollService.scrollToElement(id);
  }

  onNavigate(componentId: string) {

    // @ts-ignore
    const navHeight = document.getElementById('navbar').offsetHeight;
    // @ts-ignore
    const el = this[componentId].nativeElement;

    // Create a new dummy div
    const dummyDiv = document.createElement('div');

    // Set its height to the height of the navigation bar
    dummyDiv.style.height = `${navHeight}px`;

    // Insert the new dummy div just before the element
    el.parentNode.insertBefore(dummyDiv, el);

    dummyDiv.scrollIntoView({behavior: 'smooth'});

    // Remove the dummyDiv after the scroll
    // @ts-ignore
    setTimeout(() => dummyDiv.parentNode.removeChild(dummyDiv), 1000);
    // @ts-ignore - we're sure that one of these will exist
    // this[componentId].nativeElement.scrollIntoView({ top: stickyNavHeight, behavior: 'smooth'});
  }


}
