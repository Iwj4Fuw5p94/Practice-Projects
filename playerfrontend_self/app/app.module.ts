import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateplayerComponent } from './createplayer/createplayer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DisplayallComponent } from './displayall/displayall.component';
import { GetplayerComponent } from './getplayer/getplayer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CreateplayerComponent,
    DashboardComponent,
    DisplayallComponent,
    GetplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
