import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ButtonComponent} from "../button/button.component";

@Component({
  selector: 'app-info-box',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    ButtonComponent,
    NgStyle,
    NgClass
  ],
  templateUrl: './info-box.component.html',
  styleUrl: './info-box.component.css'
})
export class InfoBoxComponent {
  @Input() isGrey: boolean = true;
  @Input() headline: string | undefined;
  @Input() caption: string | undefined;
  @Input() list: Array<any> | undefined;
  @Input() btnText: string | undefined;
  @Input() isService: boolean | undefined;
}
