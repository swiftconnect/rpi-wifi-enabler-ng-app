import { Component, OnInit } from '@angular/core';
import { ApiClientService } from './../../services/api-client.service';

@Component({
  selector: 'app-fav-ble',
  templateUrl: './fav-ble.component.html',
  styleUrls: ['./fav-ble.component.css']
})
export class FavBleComponent implements OnInit {

  items = [];
  advertiserid;
  breakpoint: number;
  constructor(private apiclientSvc: ApiClientService) { }

  refreshBleList(): void{
    this.apiclientSvc.getBleFavDevices().subscribe(data => {
      this.advertiserid = data;
      console.log(this.advertiserid);
      });

  }
  onResize(event) {
    this.breakpoint = (event.target.innerWidth < 900) ? 1 : 4;
  }

  ngOnInit(): void {
    this.refreshBleList();
    this.breakpoint = (window.innerWidth < 400) ? 1 : 4;
  }

}
