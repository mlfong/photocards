import { Component } from '@angular/core';

import { Photocard } from './photocard';
import { PhotocardService } from './photocard.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PhotocardService]
})





export class AppComponent {
  photocards: Photocard[];
  selectedPhotocard: Photocard;

  constructor(private photocardService: PhotocardService) { }

  getPhotocards(): void {
    this.photocardService.getPhotocards().then(photocards => this.photocards = photocards);
  }
  ngOnInit(): void {
    this.getPhotocards();
  }

  onSelect(photocard: Photocard): void {
    this.selectedPhotocard = photocard;
  }

}
