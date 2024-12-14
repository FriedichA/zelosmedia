import {Component, Input} from '@angular/core';
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() imgSrc: string | undefined;
  @Input() headline: string | undefined;
  @Input() caption: string | undefined;

}
