import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './../../services/api-client.service';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-reset-zig',
  templateUrl: './reset-zig.component.html',
  styleUrls: ['./reset-zig.component.css']
})
export class ResetZigComponent implements OnInit {
  selected;
  constructor(public apiclientSvc: ApiClientService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }
  reset(data:any){
    console.log(data);
    //console.log(this.data.friendly_name);
    //this.name = this.data.friendly_name;
    if(confirm('Are you sure want to reset?')){
      if (data === 'true'){
        this.snackBar.open(data,'Reset done !', {
          duration: 2000,
          verticalPosition: 'top'
        });
        this.apiclientSvc.resetZigbeeDevices(data).subscribe((res: any) =>{
          console.log(res);
        });
      }}
      /*else if (data === 'false'){
        this.apiclientSvc.resetZigbeeDevices(data).subscribe(res =>{
          console.log(res);
          this.snackBar.open(res.toString(), 'Reset not done !', {
            duration: 2000,
            verticalPosition: 'top'
          });
        });
      }*/


}

}
