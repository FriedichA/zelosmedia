import { Component } from '@angular/core';
import {PageHeadlineComponent} from "../../shared/page-headline/page-headline.component";
import {GalleryComponent} from "../../shared/gallery/gallery.component";
import {NgForOf} from "@angular/common";
import {ButtonComponent} from "../../shared/button/button.component";
import {RouterLink} from "@angular/router";
import {InfoBoxComponent} from "../../shared/info-box/info-box.component";

@Component({
  selector: 'app-page-about-us',
  standalone: true,
  imports: [
    PageHeadlineComponent,
    GalleryComponent,
    NgForOf,
    ButtonComponent,
    RouterLink,
    InfoBoxComponent
  ],
  templateUrl: './page-about-us.component.html',
  styleUrl: './page-about-us.component.css'
})
export class PageAboutUsComponent {
  itemsArray = [
    {
      headline: 'Qualität',
      caption: 'Wir legen höchsten Wert auf erstklassige Qualität. Sowohl in der Beratung, als auch in der Durchführung jeglicher Projekte, haben wir stets den höchsten Anspruch an uns selbst.'
    },
    {
      headline: 'Faire Preise',
      caption: 'Transparente Preise sind die Grundlage für eine vertrauensvolle Zusammenarbeit. Deshalb gestalten wir unsere Preise nachvollziehbar und fair. Uns ist wichtig, dass auch unsere Lieferanten für ihre Arbeit angemessen bezahlt werden!'
    },
    {
      headline: 'Effizienz',
      caption: 'Zeit ist Geld – auch für unsere Kunden. Deshalb arbeiten wir in optimierten Prozessen und mit einem gut eingespielten Team. So können wir garantieren, dass wir Sie stets zeitnah bedienen können und dass es nicht zu Wartezeiten kommt.'
    },
    {
      headline: 'Service',
      caption: 'Auch wenn Sie einmal zu ungewöhnlicher Zeit unsere Hilfe brauchen, zögern Sie nicht, sich zu melden. Wir sind jederzeit für Sie da und freuen uns darauf, Sie zu unterstützen.'
    }
  ]
}
