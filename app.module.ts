// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './documents/home/home.component';
import { AboutComponent } from './documents/about/about.component';
import { ContactComponent } from './documents/contact/contact.component';
import { BookingComponent } from './documents/booking/booking.component';
import { AiplaneComponent } from './documents/aiplane/aiplane.component';
import { TrainComponent } from './documents/train/train.component';
import { BikeComponent } from './documents/bike/bike.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { withFetch } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BookingComponent,
    AiplaneComponent,
    TrainComponent,
    BikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
