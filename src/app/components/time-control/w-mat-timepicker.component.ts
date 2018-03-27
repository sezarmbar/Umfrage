import * as moment from 'moment';

import { MatDialog, MatDialogRef } from '@angular/material';

import { Component } from '@angular/core';
import { WTimeDialogComponent } from './w-time-dialog.component';

@Component({
    selector: 'w-mat-timepicker',
    styleUrls: ['./w-mat-timepicker.component.scss'],
    templateUrl: './w-mat-timepicker.component.html'
})
export class WMatTimePickerComponent {

    private hour = 0;
    private minute = 0;
    private meridien = '';


    constructor(private dialog: MatDialog) { }


    private getTime(): string {

        return `${this.hour}:${this.minute} ${this.meridien}`;
    }

    private showPicker($event) {

        let dialogRef = this.dialog.open(WTimeDialogComponent, {
            data: {
                hour: this.hour,
                minute: this.minute,
                meriden: this.meridien
            }
        });

        dialogRef.afterClosed().subscribe(result => {

            // result will be update userTime object or -1 or undefined (closed dialog w/o clicking cancel)
            if (result === undefined) {
                return;
            } else if (result !== -1) {

                this.hour = result.hour;
                this.minute = result.minute;
                this.meridien = result.meriden;
            }
        });

        return false;
    }
}
