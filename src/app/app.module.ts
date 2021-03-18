import { ApiClientService } from './services/api-client.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZigbeeComponent } from './zigbee/zigbee.component';
import { ShowZigComponent } from './zigbee/show-zig/show-zig.component';
import { EditZigComponent } from './zigbee/edit-zig/edit-zig.component';
import { BluetoothComponent } from './bluetooth/bluetooth.component';
import { ShowBleComponent } from './bluetooth/show-ble/show-ble.component';
import { CountdownModule } from 'ngx-countdown';

import {MatTooltipModule} from '@angular/material/tooltip';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {LayoutModule} from '@angular/cdk/layout';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { EditBleComponent } from './bluetooth/edit-ble/edit-ble.component';
import { LogZigComponent } from './zigbee/log-zig/log-zig.component';
import { FavBleComponent } from './bluetooth/fav-ble/fav-ble.component';
import { PermitZigComponent } from './zigbee/permit-zig/permit-zig.component';
import { ResetZigComponent } from './zigbee/reset-zig/reset-zig.component';
import { WifisetupComponent } from './wifi/wifisetup/wifisetup.component';


@NgModule({
  declarations: [
    AppComponent,
    ZigbeeComponent,
    ShowZigComponent,
    EditZigComponent,
    BluetoothComponent,
    ShowBleComponent,
    EditBleComponent,
    LogZigComponent,
    FavBleComponent,
    PermitZigComponent,
    ResetZigComponent,
    WifisetupComponent
  ],
  imports: [
    BrowserModule,
    CountdownModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    LayoutModule,
    FlexLayoutModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSelectModule,
    MatTableModule,
    MatListModule,
    MatPaginatorModule,
    MatSnackBarModule,
    ScrollingModule,
    MatTooltipModule
  ],
  providers: [HttpClientModule, ApiClientService],
  bootstrap: [AppComponent],
  entryComponents: [EditZigComponent]
})
export class AppModule { }
