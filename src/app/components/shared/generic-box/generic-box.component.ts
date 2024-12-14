import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-generic-box',
  standalone: true,
  imports: [],
  templateUrl: './generic-box.component.html',
  styleUrl: './generic-box.component.css'
})
export class GenericBoxComponent {
  @Input() headline: string | undefined;
  @Input() caption: string | undefined;
}
