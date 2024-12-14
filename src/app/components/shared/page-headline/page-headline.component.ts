import {Component, Input, input} from '@angular/core';
import {NgClass, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-page-headline',
  standalone: true,
  imports: [
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './page-headline.component.html',
  styleUrl: './page-headline.component.css'
})
export class PageHeadlineComponent {

    @Input() text: string = '';
    @Input() isDark: boolean | undefined;
    @Input() h1: boolean | undefined;
    @Input() h2: boolean | undefined;
    @Input() headline3: boolean | undefined;

    @Input() isTextCentered: boolean | undefined;
    @Input() isIndented: boolean | undefined;
}
