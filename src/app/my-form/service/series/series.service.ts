import { Injectable, Optional } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private result: string = ""
  constructor(@Optional() private logService : LogService) { }
  getSeries(n: number) {
    this.result += n;
    while (n != 1) {
      if (n %2 === 0) {
        n /= 2;
        this.result += " "+n;
      }
      else {
        n = n*3 +1;
        this.result += " "+n;
      }
    }
    return this.result;
  }
}
