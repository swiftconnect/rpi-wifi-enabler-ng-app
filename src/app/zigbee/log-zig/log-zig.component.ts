import { WebSocketService } from './../../services/web-socket.service';
import { Component, OnInit } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-log-zig',
  templateUrl: './log-zig.component.html',
  styleUrls: ['./log-zig.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogZigComponent implements OnInit {
  zigData;
  newzigData;
  loading = true;
  public ip;
  public url ;
  public port;
  name = 'Set iframe source';
  urlSafe: SafeResourceUrl;
  constructor(private webSocketService: WebSocketService, public sanitizer: DomSanitizer) {
    this.ip = window.location.hostname;
    this.port = window.location.port;
    console.log(this.port);
    console.log(this.ip);
    this.url = 'http://' + this.ip + ':9001' ;
   }

  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    console.log(this.urlSafe);
    //this.refreshLoglist();
  }
  /*refreshLoglist(){
    this.webSocketService.connect();
    console.log('Called connect on zigbee websocketservice...????');
    this.webSocketService.socket$.subscribe(data => {
      console.log({log: data});
      if(data){
        this.loading = false;*/
        /*for (let key in data)
        if (data.hasOwnProperty(key)) {
          data[key].logline = key;
          this.advertiserid = data[key].logline;
          this.items.push(data[key]);
          console.log({address: this.advertiserid});
        }*/
        /*this.zigData = data;
        this.newzigData = this.zigData.logline;
      }
        //console.log({loglinelogs: this.newzigData});
        });
    }*/

}
