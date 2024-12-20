import {Component, Input, OnInit} from '@angular/core';
import {NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.css'
})
export class IconComponent implements OnInit {

  @Input() iconName: string | undefined;

  imgUrl: string | undefined;

  ngOnInit(){
    this.imgUrl = `assets/image/icons/${this.iconName}.png`;
  }

}
