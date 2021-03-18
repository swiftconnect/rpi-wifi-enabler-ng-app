import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {HttpClientModule, HttpClient, HttpRequest, HttpResponse, HttpEventType} from '@angular/common/http';
@Component({
  selector: 'app-wifisetup',
  templateUrl: './wifisetup.component.html',
  styleUrls: ['./wifisetup.component.css']
})
export class WifisetupComponent implements OnInit {

  public ip;
  public url ;
  public port;
  public protocol;
  constructor(private http: HttpClient,private snackbar: MatSnackBar) {
    this.ip = window.location.hostname;
    this.port = window.location.port;
    console.log(this.port);
    console.log(this.ip);
    this.protocol = window.location.protocol;
    // this.url = 'http://8344357067f7.ngrok.io/api/';
    this.url = this.protocol+ '//' + this.ip + ':' + this.port + '/api/v1/init-wifi';
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.http.post(this.url, {}, {params:{username: form.value.name, password: form.value.password}}).subscribe(res => {
      console.log(res);
      this.snackbar.open('','Applying settings ',{
        duration: 3000,
        verticalPosition: 'top'
      })
    });
  }
}
