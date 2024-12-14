import { Component } from '@angular/core';
import {PageHeadlineComponent} from "../../shared/page-headline/page-headline.component";
import {GalleryComponent} from "../../shared/gallery/gallery.component";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-page-references',
  standalone: true,
  imports: [
    PageHeadlineComponent,
    GalleryComponent,
    NgForOf,
    RouterLink
  ],
  templateUrl: './page-references.component.html',
  styleUrl: './page-references.component.css'
})
export class PageReferencesComponent {

  itemsArray = [
    {
      imgSrc: 'assets/images/league-nno-t1.jpg',
      headline: 'Redbull Gameball',
      caption: '30 Meter Domzeltprojektion mit 12 4k Projektoren'
    },
    {
      imgSrc: 'assets/images/redbull-gameball.jpg',
      headline: 'Heilbronn SLUSH D',
      caption: '30 Meter Domzeltprojektion mit 12 4k Projektoren'
    },
    {
      imgSrc: 'assets/images/slush-d.jpg',
      headline: 'Redbull Gameball',
      caption: '30 Meter Domzeltprojektion mit 12 4k Projektoren'
    },
    {
      imgSrc: 'https://picsum.photos/200',
      headline: 'Redbull Gameball',
      caption: '30 Meter Domzeltprojektion mit 12 4k Projektoren'
    }
  ]

}
