import { ActivatedRoute } from '@angular/router';
import { EditZigComponent } from './../edit-zig/edit-zig.component';
import { DeviceInterface } from './../../device-interface';
import { ApiClientService } from './../../services/api-client.service';
import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
@Component({
  selector: 'app-show-zig',
  templateUrl: './show-zig.component.html',
  styleUrls: ['./show-zig.component.css']
})
export class ShowZigComponent implements OnInit {
  breakpoint: number;
  deviceInfoObjects: any[];
  loading = true;
  ip;

  constructor(public apiclientSvc: ApiClientService, private router: ActivatedRoute, private snackBar: MatSnackBar, public dialog: MatDialog) {}

  refreshZigList(): void{
    this.deviceInfoObjects = [];
    this.apiclientSvc.getPairedDevices().subscribe((data) => {
      if(data){
        this.loading = false;
        console.log(data[1].length);
        for (let i = 0; i < data[1].length; ++i) {
        const deviceDetailSrc = data[1][i];
        console.log({ elem: deviceDetailSrc });
        this.deviceInfoObjects.push(deviceDetailSrc);
      }};
    });
  }

  onDelete(deviceDetail: string) {
    if(confirm('Are you sure to delete?')){
    this.apiclientSvc.deletePairedDevices(deviceDetail).subscribe(res =>{
      this.refreshZigList();
      this.snackBar.open(res.toString(), '', {
        duration: 5000,
        verticalPosition: 'top'
      });
    });
  }
}
onPermanentDelete(deviceDetail: string): void {
  if(confirm('Are you sure to delete forcefully ?')){
  this.apiclientSvc.deletepermPairedDevices(deviceDetail).subscribe(res =>{
    this.refreshZigList();
    this.snackBar.open(res.toString(), '', {
      duration: 5000,
      verticalPosition: 'top'
    });
  });
}
}

refresh() {
  this.ngOnInit();
  //window.location.reload();
}

  ngOnInit(): void {
    this.refreshZigList();
    this.breakpoint = (window.innerWidth < 400) ? 1 : 3;

  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth < 900) ? 1 : 3;
  }
  onReset(deviceDetail: DeviceInterface){
    if(confirm('Are you sure to reset this device?')){
      this.apiclientSvc.resetPairedDevices(deviceDetail).subscribe(res =>{
        this.refreshZigList();
        this.snackBar.open(res.toString(), '', {
          duration: 5000,
          verticalPosition: 'top'
        });
      });
    }
  }
  onEdit(deviceDetail: string){
    console.log("Device", deviceDetail);
    //this.apiclientSvc.setter(deviceDetail);
    //this.router.navigate(['editzig',deviceDetail]);
    //this.apiclientSvc.formData = friendlyname;
    //console.log(this.apiclientSvc.formData);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '70%';
    dialogConfig.data = deviceDetail;
    this.dialog.open(EditZigComponent, dialogConfig);
  }
}
