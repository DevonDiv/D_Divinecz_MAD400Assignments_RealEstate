import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(serviceWorkerUpdate: SwUpdate, private snackBar: MatSnackBar) {
    serviceWorkerUpdate.available.subscribe(event => {
      const snackBarRef = this.snackBar.open('Update available', 'Reload', {
        duration: 5000
      });
      snackBarRef.onAction().subscribe(() => {
        window.location.reload();
      });
    });
  }
}
