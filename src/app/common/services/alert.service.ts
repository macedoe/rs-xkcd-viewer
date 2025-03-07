import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    constructor(private snackbar: MatSnackBar) {}

    show(message: string, action: string = 'ok', duration: number = 3000) {
        this.snackbar.open(message, action, { duration });
    }

    error(message: string, action: string = 'ok', duration: number = 0) {
        this.snackbar.open(message, action, { duration, panelClass: 'error' });
    }

    success(message: string, action: string = 'ok', duration: number = 0) {
        this.snackbar.open(message, action, { duration, panelClass: 'success' });
    }

    warning(message: string, action: string = 'ok', duration: number = 0) {
        this.snackbar.open(message, action, { duration, panelClass: 'warning' });
    }
}
