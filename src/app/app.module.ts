;
import { ShopNavComponent } from './shop-nav/shop-nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,MatIconRegistry, MatListModule,
   MatCardModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatDialogModule} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { BuyCarComponent } from './buy-car/buy-car.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { BuyCarService } from './services/buy-car-service.service';
import { CarListingComponent } from './car-listing/car-listing.component';
import { CarService} from './services/car-service.service';
import { RegisterCarComponent } from './register-car/register-car.component';
import { BuyCarDialogComponentComponent } from './buy-car-dialog-component/buy-car-dialog-component.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAccessComponent } from './user-access/user-access.component';


@NgModule({
  declarations: [
    AppComponent,
    BuyCarComponent,
    ShopNavComponent,
    CarListingComponent,
    RegisterCarComponent,
    BuyCarDialogComponentComponent,
    UserDashboardComponent,
    UserAccessComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
   
  ],
  providers: [BuyCarService, CarService],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor(matIconRegistry: MatIconRegistry, domSanitizer: DomSanitizer){
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg'));
  }
}
