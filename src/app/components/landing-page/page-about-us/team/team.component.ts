import { Component } from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";
import {PageHeadlineComponent} from "../../../shared/page-headline/page-headline.component";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [
    NgForOf,
    PageHeadlineComponent,
    NgIf
  ],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  team = [
    {
      name: 'Philipp Seibel',
      imageSrc: 'assets/images/phillipp_seibel_pb 1.png',
      position: 'CEO | Projektplanung Technische Konzeption'
    },
    {
      name: 'Ole Maria Hauge',
      imageSrc: 'assets/images/oleel.png',
      position: 'Videotechniker'
    },
    {
      name: 'Florian Michel',
      imageSrc: 'assets/images/phillipp_seibel_pb 1.png',
      position: 'LED Techniker'
    },
    {
      name: 'Friedrich Ackerstaff',
      imageSrc: 'assets/images/friedrich_ackerstaff_pp.png',
      position: 'Techniker'
    },
    {
      name: 'Justin Rudi',
      imageSrc: 'assets/images/phillipp_seibel_pb 1.png',
      position: 'LED Techniker'
    },
    {
      name: 'Hannah Hauge',
      imageSrc: 'assets/images/phillipp_seibel_pb 1.png',
      position: 'Back Office'
    },
    {
      name: 'Jacy Herrmann',
      imageSrc: 'assets/images/phillipp_seibel_pb 1.png',
      position: 'Back Office'
    }
  ]
}
