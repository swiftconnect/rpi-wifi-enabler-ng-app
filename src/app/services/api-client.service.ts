import { NgForm } from '@angular/forms';
import { DeviceInterface } from './../device-interface';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiClientService {
  public ip;
  public url ;
  public port;
  public protocol;
  public friendlyname;
  constructor(private httpClient: HttpClient) {
    this.ip = window.location.hostname;
    this.port = window.location.port;
    this.protocol = window.location.protocol;
    console.log(this.protocol);

    console.log(this.port);
    // this.url = 'http://8344357067f7.ngrok.io/api/';
    this.url = this.protocol+ '//' + this.ip + ':' + this.port + '/api/';
    console.log(this.url);
  }
  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  formData: DeviceInterface;
  getPairedDevices(): Observable<DeviceInterface[]>{
    return this.httpClient.get<DeviceInterface[]>(this.url + 'v1/devices');
  }
  getBleDevices(){
    return this.httpClient.get(this.url + 'v1/ble/advertisements');
  }
  getBleFavDevices(){
    return this.httpClient.get(this.url + 'v1/ble/advertisement/favourite');
  }
  renamePairedDevices(data: any, newdata){
    console.log(data);
    console.log(newdata);
    //const params = new HttpParams()
    //  .set('friendlyname', data);
   // console.log(params);
    return this.httpClient.put(this.url + 'v1/devices/'+data,{},{params:{newName: newdata.friendlyname}});//('{params: params}'));
  }

  permitPairedDevices(data:any, item){
    //console.log(data);
    //console.log(item);
    //console.log(newdata);
    //const params = new HttpParams()
    //  .set('friendlyname', data);
   // console.log(params);
    return this.httpClient.post(this.url + 'v1/config/permit_join',{},{params:{value: data,permitDuration: item}});//('{params: params}'));
  }

  resetZigbeeDevices(data:any){
    console.log(data);
    //console.log(newdata);
    //const params = new HttpParams()
    //  .set('friendlyname', data);
   // console.log(params);
    return this.httpClient.post(this.url + 'v1/config/reset',{},{params:{value: data}});//('{params: params}'));
  }

  deletepermPairedDevices(friendlyname){
    console.log(friendlyname.friendly_name);
    this.friendlyname = friendlyname.friendly_name;
    return this.httpClient.delete(this.url + 'v1/devices/' + this.friendlyname);//(this.url + 'v1/devices/'+friendlyname);
  }
  deletePairedDevices(friendlyname){
    console.log(friendlyname.friendly_name);
    this.friendlyname = friendlyname.friendly_name;
    return this.httpClient.delete(this.url + 'v1/devices' + this.friendlyname + '/force');
  }
  resetPairedDevices(friendlyname: DeviceInterface){
    console.log(friendlyname.friendly_name);
    return this.httpClient.post(this.url + 'v1/devices/'+friendlyname.friendly_name+ '/reset',this.HttpOptions);
  }
  postBleDevices(item){
    console.log(item.address);
    const httpOptions = {
      headers: new HttpHeaders({
        address: item.address,
        friendly_Name: 'HUMAN_TEMP'
      })
    };
    const body = {address: item.address, friendly_name: 'HUMAN_TEMP'};
    return this.httpClient.post(this.url + 'v1/ble/advertisements/favourites', body, httpOptions);
  }
}
