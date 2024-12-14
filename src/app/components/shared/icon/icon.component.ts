import {Component, Input} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent {

  @Input() icon: string | undefined;
  icons = {
    insta: {
      name: 'insta',
      src: 'assets/icons/insta.png',
    },
    linkedin: {
      name: 'linkedin',
      src: 'assets/icons/linked.png',
    },
    email: {
      name: 'email',
      src: 'assets/icons/email.png',
    },
  };

}
