import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'videoSeguro'
})
export class VideoSeguroPipe implements PipeTransform {
    constructor(private _dom: DomSanitizer){

    }
  transform(videoID: string): any {
      let url = 'https://www.youtube.com/embed/' + videoID;
    return this._dom.bypassSecurityTrustResourceUrl(url);
  }

}
