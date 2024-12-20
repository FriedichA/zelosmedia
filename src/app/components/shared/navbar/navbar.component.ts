import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {ScrollService} from "../../../services/scroll.service";
import {IconComponent} from "../icon/icon.component";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    RouterLinkActive,
    IconComponent,
    NgIf
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMenuActive = false;
  width = window.innerWidth;
  mobile = false;
  tablet = false;

  constructor(private router: Router, private scrollService: ScrollService) {
    console.log(window.innerWidth);
    if (this.width > 600) {
      this.mobile = true;
    } else if (this.width < 1180) {
      this.tablet = true;
    }
  }


  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  @Output() navigate = new EventEmitter<string>();


  navigateAndScroll(id: string): void {
    if (this.router.url != '') {
      this.router.navigate(['/'], {fragment: id});
      setTimeout(() => {
        this.scrollService.scrollToElement(id)
      }, 500);
    } else {
      this.router.navigate(['/'], {fragment: id});
      this.toggleMenu()
    }

    console.log(this.router.url)
  }

  scrollTop() {
    window.scroll(0, 0);
  }
}
