import { EditBleComponent } from './../edit-ble/edit-ble.component';
import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './../../services/api-client.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';

@Component({
  selector: 'app-show-ble',
  templateUrl: './show-ble.component.html',
  styleUrls: ['./show-ble.component.css']
})
export class ShowBleComponent implements OnInit {
  items = [];
  advertiserid: string;
  breakpoint: number;
  loading = true;
  constructor(private apiclientSvc: ApiClientService,private snackBar: MatSnackBar,public dialog: MatDialog) {}

   refreshBleList(): void{
    this.apiclientSvc.getBleDevices().subscribe(data => {
      if(data){
        this.loading = false;
        console.log({ble: data});
        for (let key in data)
        if (data.hasOwnProperty(key)) {
          data[key].address = key;
          this.advertiserid = data[key].address;
          this.items.push(data[key]);
          //console.log({address: this.advertiserid});
        }}
        });
  }

  ngOnInit(): void {
    this.refreshBleList();
    this.breakpoint = (window.innerWidth < 400) ? 1 : 5;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth < 900) ? 1 : 4;
  }
  doPost(item: string){
    console.log("Device",item);
    this.snackBar.open('Added to Favourites', '', {
      duration: 5000,
      verticalPosition: 'top'
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.data = item;
    this.dialog.open(EditBleComponent, dialogConfig);

    this.apiclientSvc.postBleDevices(item).subscribe(res =>{
      this.refreshBleList();
      this.snackBar.open(res.toString(), '', {
        duration: 5000,
        verticalPosition: 'top'
      });
    });
  }
  refresh() {
    window.location.reload();
  }
}

