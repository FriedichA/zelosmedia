import { Component } from '@angular/core';
import {PageHeadlineComponent} from "../shared/page-headline/page-headline.component";
import {IconComponent} from "../shared/icon/icon.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    PageHeadlineComponent,
    IconComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
