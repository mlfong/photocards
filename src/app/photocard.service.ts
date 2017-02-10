import { Injectable } from '@angular/core';

import { Photocard } from './photocard';
import { PHOTOCARDS } from './mock-photocards';

@Injectable()
export class PhotocardService {
  getPhotocards(): Promise<Photocard[]> {
    return Promise.resolve(PHOTOCARDS);
  }
}
