import {Component, EventEmitter, Output} from '@angular/core';
import {NgClass} from "@angular/common";
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
    IconComponent
  ],
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router: Router, private scrollService: ScrollService) {
  }
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  @Output() navigate = new EventEmitter<string>();

  navigateAndScroll(id: string): void {
    if (this.router.url != '') {
      this.router.navigate(['/'], { fragment: id });
      setTimeout(() => {
        this.scrollService.scrollToElement(id)}, 500);
    } else {
      this.router.navigate(['/'], { fragment: id });
    }

    console.log(this.router.url)
  }

  scrollTop() {
    window.scroll(0, 0);
  }
}
