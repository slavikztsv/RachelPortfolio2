import { Injectable } from '@angular/core';
import GlobalVars from 'src/app/shared/globalVars';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getMediaArray() {
    return GlobalVars.mediaArray;
  }
}
