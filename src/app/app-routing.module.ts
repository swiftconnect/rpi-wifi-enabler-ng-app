import { ResetZigComponent } from './zigbee/reset-zig/reset-zig.component';
import { PermitZigComponent } from './zigbee/permit-zig/permit-zig.component';
import { FavBleComponent } from './bluetooth/fav-ble/fav-ble.component';
import { LogZigComponent } from './zigbee/log-zig/log-zig.component';
import { EditBleComponent } from './bluetooth/edit-ble/edit-ble.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { ZigbeeComponent } from './zigbee/zigbee.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WifisetupComponent } from './wifi/wifisetup/wifisetup.component';

const routes: Routes = [
  {path: 'zigbee', component: ZigbeeComponent},
  {path: 'bluetooth', component: BluetoothComponent},
  {path: 'editble', component: EditBleComponent},
  {path: 'logs', component: LogZigComponent},
  {path: 'fav', component: FavBleComponent},
  {path: 'permit', component: PermitZigComponent},
  {path: 'reset', component: ResetZigComponent},
  {path: 'wifi', component: WifisetupComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
