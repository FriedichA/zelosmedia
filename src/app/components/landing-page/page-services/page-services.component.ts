import { Component } from '@angular/core';
import {PageHeadlineComponent} from "../../shared/page-headline/page-headline.component";
import {InfoBoxComponent} from "../../shared/info-box/info-box.component";
import {NgForOf} from "@angular/common";
import {ButtonComponent} from "../../shared/button/button.component";

@Component({
  selector: 'app-page-services',
  standalone: true,
  imports: [
    PageHeadlineComponent,
    InfoBoxComponent,
    NgForOf,
    ButtonComponent
  ],
  templateUrl: './page-services.component.html',
  styleUrl: './page-services.component.css'
})
export class PageServicesComponent {
  itemArray = [
    {
      headline: 'Veranstaltungstechnik<br>Messeservice',
      caption: 'Bei uns finden Sie alles, was Sie für eine erfolgreiche Veranstaltung benötigen, von Tontechnik über Beleuchtung und Bühnenbau bis hin zu Videotechnik und Spezialeffekten. Unser erfahrenes Team unterstützt Sie von der Planung bis zur Umsetzung, um Ihre Veranstaltung einzigartig zu machen. Kontaktieren Sie uns jetzt, um mehr zu erfahren!',
      list: [
        'Video & Projektionstechnik',
        'Beleuchtung',
        'Tontechnik',
        'Bühnentechnik',
        'Drohnenflugshows'
      ]
    },
    {
      headline: 'Medientechnik',
      caption: 'Hochwertige Medientechnik ist entscheidend für erfolgreiche Veranstaltungen und Präsentationen. Unsere modernste Technologie, wie Displays, Audio-Systeme und Projektoren, verleihen Ihrer Botschaft eine beeindruckende Präsentation. Wir bieten maßgeschneiderte Lösungen und umfassende Beratung, Planung und Umsetzung für ihr Unternehmen. Vertrauen Sie uns für eine erstklassige Medientechnik-Lösung.',
      list: [
        'Schulungs- & Konferenzräume',
        'Showrooms',
        'Präsentationen',
        'Digitale Plakate'
      ]
    },
  ]

}
