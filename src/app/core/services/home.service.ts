import { Injectable } from '@angular/core';
import GlobalVars from 'src/app/shared/globalVars';
import { Media } from 'src/app/shared/models/media.model';
import { MediaType } from 'src/app/shared/enums';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor() { }

  getMediaArray() {
    const newArr = [];
    for (const media of GlobalVars.mediaArray) {
      newArr.push(Object.assign({}, media));
    }

    return newArr;
  }

  getSelectedMediaLogic(selectedMedia: Media) {
    if (selectedMedia.childMedia.length > 0) {
      selectedMedia.fileName = selectedMedia.childMedia[0].fileName;
      selectedMedia.type = selectedMedia.childMedia[0].type;
    }
    return selectedMedia;
  }
}
