import { Component, OnInit, Inject, Injectable } from '@angular/core';

import {BuyCarService} from '../services/buy-car-service.service';
import {Car} from '../models/car.model';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { BuyCarDialogComponentComponent } from '../buy-car-dialog-component/buy-car-dialog-component.component';
import { Transaction } from '../models/Transaction.model';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css']
})

@Injectable()
export class BuyCarComponent implements OnInit {

  private car: Car;
  private carVin: string;

  constructor(private buyCarService:BuyCarService, private activatedRoute:ActivatedRoute,
     private dialog: MatDialog) {
    this.buyCarService = buyCarService;
   }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
     params => {this.carVin = params['vin']
     this.setCar(this.carVin)}
    );
  }

  public doSomething(car:Car):void{
    this.car = car;
    console.log(this.car);
  }
  public setCar(vin:string):void{
    this.buyCarService.getCar(vin).subscribe(
      car=> this.doSomething(car), error=>console.log("error occured" + error)
    )
  }
  
  public buyCar():void{
    let transaction = new Transaction();
    console.log("Buying car:" + transaction);
    transaction.vin = this.car.vin;
    transaction.seller = this.car.currentOwner;
    console.log(window.localStorage.getItem("user"));
    transaction.buyer = window.localStorage.getItem("user");
    transaction.price = "0";
    console.log(transaction);
    this.openDialog(transaction);
  }
  openDialog(transaction:Transaction): void{
    console.log(transaction);
    const dialogRef = this.dialog.open(BuyCarDialogComponentComponent, {
      width: '500px',
      data: transaction
    });

    dialogRef.afterClosed().subscribe(result=>{
      console.log(result);
    });
  }

  




}
