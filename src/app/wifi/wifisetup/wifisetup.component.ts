import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  constructor(private http: HttpClient) {
    this.ip = window.location.hostname;
    this.port = window.location.port;
    console.log(this.port);
    console.log(this.ip);
    // this.url = 'http://8344357067f7.ngrok.io/api/';
    this.url = 'http://' + this.ip + ':' + this.port + '/api/v1/wifi-params';
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    console.log(form.value);
    this.http.post(this.url, form.value.name, form.value.password).subscribe(res => {
      console.log(res);
    });
  }
}
