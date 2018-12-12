import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { BuyCarComponent } from '../buy-car/buy-car.component';
import { RegisterCarComponent } from '../register-car/register-car.component';
import { CarListingComponent } from '../car-listing/car-listing.component';
import { BuyCarDialogComponentComponent } from '../buy-car-dialog-component/buy-car-dialog-component.component';
import { UserAccessComponent } from '../user-access/user-access.component';
import { UserDashboardComponent } from '../user-dashboard/user-dashboard.component';

const routes: Routes = [
  {path:'view-car', component: BuyCarComponent},
  {path: 'register-car', component: RegisterCarComponent},
  {path: 'car-listing', component: CarListingComponent},
  {path: 'buy-car', component: BuyCarDialogComponentComponent},
  {path: 'login', component: UserAccessComponent,},
  {path: 'dashboard', component: UserDashboardComponent}
]

@NgModule({
  exports:[RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  
})
export class AppRoutingModule {

 }
