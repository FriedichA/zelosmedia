import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      console.log(element, id);
      // @ts-ignore
      const navHeight = document.getElementById('navbar').offsetHeight;
      // Create a new dummy div
      const dummyDiv = document.createElement('div');

      // Set its height to the height of the navigation bar
      dummyDiv.style.height = `${navHeight + 70}px`;

      // Insert the new dummy div just before the element
      // @ts-ignore

      element.scrollIntoView({behavior: 'smooth'});
    }
  }
}
