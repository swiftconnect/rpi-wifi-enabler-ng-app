import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, switchAll } from 'rxjs/operators';
//import * as Rx from "rxjs/Rx";
import { EMPTY, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  public ip;
  public url ;
  public port ;
  constructor() {
    this.ip = window.location.hostname;
    this.port = window.location.port;
    console.log(this.ip);
    this.url = 'ws://' + this.ip + ':' + this.port + '/api/';

  }
  public WS_ENDPOINT = 'ws/zigbee/logs';
  private socket$: WebSocketSubject<any>;
  private messagesSubject$ = new Subject();
  public messages$ = this.messagesSubject$.pipe(switchAll(), catchError(e => { throw e }));

  public connect(): void {
    console.log("Connecting to web socket...????");
    if (!this.socket$ || this.socket$.closed) {
      console.log("Websocket is open...");
      this.socket$ = this.getNewWebSocket();

      this.socket$.subscribe(data => {
        console.log(data);
      });

      const messages =
        this.socket$.pipe(
          tap({
            error: error => console.log(error),
        }), catchError(_ => EMPTY));

      console.log("About to call next..");
      this.messagesSubject$.next(messages);
      console.log("Called next...");
    }
  }
  private getNewWebSocket() {
    console.log("Connecting to:"+ this.url + this.WS_ENDPOINT);
    return webSocket(this.url + this.WS_ENDPOINT);
  }

  sendMessage(msg: any) {
    this.socket$.next(msg);
  }

  close() {
    this.socket$.complete();
  }
}
