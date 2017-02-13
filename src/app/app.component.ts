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
  masterList: Photocard[];
  photocards: Photocard[];
  selectedPhotocard: Photocard;

  constructor(private photocardService: PhotocardService) { }

  getPhotocards(): void {
    this.photocardService
        .getPhotocards()
        .then(
          photocards => { 
            this.masterList = [];
            this.photocards = [];
            photocards.forEach((x) => {
              this.masterList.push(x);
              this.photocards.push(x);
            });
          }
        );
    
  }

  ngOnInit(): void {
    this.getPhotocards();
  }

  onSelect(photocard: Photocard): void {
    this.selectedPhotocard = photocard;
  }

  searchMember(searchValue: string): void {
    console.log(searchValue);
    if(searchValue.toLowerCase().trim() === '') {
      this.resetFilters();
      return;
    }
    this.photocards = [];
    this.masterList.forEach((x: Photocard) => {
      let found = false;
      x.members.forEach((member: string) => {
        if(this.contains(member.toLowerCase(), searchValue.toLowerCase()))
          found = true;
      });
      if(found)
        this.photocards.push(x);
    });
  }

  resetFilters(): void {
    this.photocards = [];
    this.masterList.forEach((x) => {
      this.photocards.push(x);
    });
  }

  duplicateArray(originalArray): any[] {
    let arr = [];
    originalArray.forEach((x) => {
      arr.push(Object.assign({}, x));
    })
    return arr;
  }

  contains(a: string, b:string): boolean {
    return a.indexOf(b) !== -1;
  }
}
