import { Component, OnInit, Inject } from '@angular/core';
import { ApiClientService } from './../../services/api-client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-ble',
  templateUrl: './edit-ble.component.html',
  styleUrls: ['./edit-ble.component.css']
})
export class EditBleComponent implements OnInit {
  breakpoint: number;

  constructor(public dialogbox: MatDialogRef<EditBleComponent>,@Inject(MAT_DIALOG_DATA) public data: any, public apiclientSvc: ApiClientService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    console.log(this.data);
    this.breakpoint = (window.innerWidth < 400) ? 1 : 2;
  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth < 900) ? 1 : 4;
  }
  onClose(){
    this.dialogbox.close();
  }

}
