import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyReqestCount = 0;
  private spinnerService = inject(NgxSpinnerService);
  
  busy() {
    this.busyReqestCount++;
    this.spinnerService.show(undefined ,{
      type: 'line-scale-party',
      bdColor: 'rgba(255, 255, 255, 0)',
      color: '#333333'
    })
   }

  idle() {
    this.busyReqestCount--;
    if (this.busyReqestCount <= 0) {
      this.busyReqestCount = 0;
      this.spinnerService.hide();
    }
  }
}
