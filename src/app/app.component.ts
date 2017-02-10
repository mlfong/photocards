import { Component } from '@angular/core';

export class Photocard {
  id: number;
  members: string[];
  url: string;
  photoset: string;
  team: string;
}

const PHOTOCARDS: Photocard[] = [
  {id: 1, members: ["Yamamoto Sayaka"], photoset: "Kimi wa Melody", team: "N",
   url: "https://lh3.googleusercontent.com/z9Wv_XVVGykzKwsywFwDAMjCrNER03QHTG5jlAsMYmTjSTWGAiQt3WB9BI8SxulGSe4NsJzlst5FzO4=w1439-h776-rw"},
  {id: 2, members: ["Yamamoto Sayaka"], photoset: "Be My Baby", team: "N",
   url: "https://lh4.googleusercontent.com/gbSrGwhEjNYFcy3Yq1e273Jol5RN7BXyibmyCZj_QTjKXRe2SISH7M94-cxB3XkaLvF16poGdiMFAOo=w1439-h776-rw"}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})





export class AppComponent {
  title = 'app works!';
  photocards = PHOTOCARDS;
  selectedPhotocard: Photocard;

  onSelect(photocard: Photocard): void {
    this.selectedPhotocard = photocard;
  }

}
