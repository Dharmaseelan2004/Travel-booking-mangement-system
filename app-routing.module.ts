
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './documents/home/home.component';
import { AboutComponent } from './documents/about/about.component';
import { ContactComponent } from './documents/contact/contact.component';
import { BookingComponent } from './documents/booking/booking.component';
import { BikeComponent } from './documents/bike/bike.component';
import { TrainComponent } from './documents/train/train.component';
import { AiplaneComponent } from './documents/aiplane/aiplane.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path:'booking', component: BookingComponent},
  { path: "bike", component:BikeComponent},
  { path: "train", component:TrainComponent},
  { path: "airplane", component:AiplaneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
