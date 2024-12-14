import { Component } from '@angular/core';
import {PageHeadlineComponent} from "../../../shared/page-headline/page-headline.component";
import {ScrollService} from "../../../../services/scroll.service";
import {Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-reference-detail',
  standalone: true,
  imports: [
    PageHeadlineComponent,
    NgIf
  ],
  templateUrl: './reference-detail.component.html',
  styleUrl: './reference-detail.component.css'
})
export class ReferenceDetailComponent {

  reference = [
    {
      headline: 'Heilbronn SLUSH´D',
            text: 'Die Reise beginnt im Jahr 2019 mit der Installation unseres ersten Konferenzraums. Seitdem sind wir zu einem angesehenen Anbieter für Medien- und Veranstaltungstechnik gewachsen und zu einem starken Akteur auf dem AV Markt geworden. Wir bedienen Kunden in ganz Europa und liefern komplexe, ganzheitliche Komplettlösungen.',
            infobox: {
              name: 'Projektinfos',
              duration: '7 Days',
              location: 'Heilbronn'
            }
    }
  ]

  constructor() {
    scrollTo(0, 0)
  }


}
