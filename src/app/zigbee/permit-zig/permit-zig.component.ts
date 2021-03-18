import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiClientService } from './../../services/api-client.service';
import { CountdownComponent } from 'ngx-countdown';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-permit-zig',
  templateUrl: './permit-zig.component.html',
  styleUrls: ['./permit-zig.component.css']
})
export class PermitZigComponent implements OnInit {
selected;
public settime: number;
status = '';
@ViewChild('countdown') counter: CountdownComponent;
  constructor(public apiclientSvc: ApiClientService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  addTodo(time: any) {
    console.log(time);
    if(time){
    this.timerObj = {
      t1: {
        config: {
          leftTime: time,
          demand: false,
        }
      }
    }
    }
    //this.apiclientSvc.permitPairedDevices(time).subscribe(res =>{
    //  console.log(res);

 //   });
  }

  permit(data:any, time){
    console.log(data);
    console.log(time);
    //console.log(this.data.friendly_name);
    //this.name = this.data.friendly_name;
    if(data === 'true'){
      this.snackBar.open(data,'Permission is ON !', {
        duration: 1000,
        verticalPosition: 'top'
      });

    /*this.timerObj = {
      t1: {
        config: {
          leftTime: this.settime,
          demand: false,
        }
      }
    }*/
    }
    /*else if(data === 'false'){
      this.snackBar.open(data,'Permission is OFF !', {
        duration: 2000,
        verticalPosition: 'top'
      });
      this.timerObj = {
        t1: {
          config: {
            leftTime: 0,
            demand: false,
          }
        }
      }
    }*/
    // if(data === 'true'){
    //  this.counter.begin();
    //}
    this.apiclientSvc.permitPairedDevices(data,time).subscribe(res =>{
      console.log(res);

    });
  }
  timerObj = {
    t1: {
      config: {
        leftTime: 0,
        demand: true,
      }
    }
  }

}
