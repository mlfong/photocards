import { Component, Input } from '@angular/core';
import { Photocard } from './photocard';
@Component({
  selector: 'my-photocard-detail',
  templateUrl: './photocard-detail.component.html',
  styleUrls: ['./photocard-detail.component.css']
})
export class PhotocardDetailComponent {
  @Input()
  photocard: Photocard;
}