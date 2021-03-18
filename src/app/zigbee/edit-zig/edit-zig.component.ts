import { ApiClientService } from './../../services/api-client.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeviceInterface } from './../../device-interface';
import { Component, OnInit, Inject, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-zig',
  templateUrl: './edit-zig.component.html',
  styleUrls: ['./edit-zig.component.css']
})
export class EditZigComponent implements OnInit {
  name;

  constructor(public dialogbox: MatDialogRef<EditZigComponent>,@Inject(MAT_DIALOG_DATA) public data: any, public apiclientSvc: ApiClientService, private snackbar: MatSnackBar) { }

  ngOnInit(): void {
    //this.resetForm();
    console.log(this.data.friendly_name);
  }
  onClose(){
    this.dialogbox.close();
    //this.apiclientSvc.filter('Register click');
  }
  onSubmit(form: NgForm){
    console.log(form.value);
    console.log(this.data.friendly_name);
    this.name = this.data.friendly_name;
    this.dialogbox.close();
    this.apiclientSvc.renamePairedDevices(this.name, form.value).subscribe(res =>{
      console.log(res);
      this.snackbar.open(res[0].new,'name is updated',{
        duration: 3000,
        verticalPosition: 'top'
      })
    })
  }
  /*resetForm(form?:NgForm){res.toString()
    if(form!=null)
    form.resetForm();

    this.apiclientSvc.formData = {
      friendly_name: null,
      ieeeAddr: null,
      manufacturerID: null,
      manufacturerName: null,
      networkAddress: null,
      type: null,
      model: null,
      modelID: null,
      lastSeen: null,
      length: null
    };
  }*/

}
