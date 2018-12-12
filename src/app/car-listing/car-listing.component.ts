import { Component, OnInit, Injectable } from '@angular/core';
import { CarService } from '../services/car-service.service';
import {Car} from '../models/car.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.css']
})

@Injectable()
export class CarListingComponent implements OnInit {

  cars:Car [];
  constructor(private carService:CarService, private router:Router) { }

  ngOnInit() {
    this.getAllCars();
  }

  private setCars(cars:Car[]):void{
    this.cars = cars;
    console.log(this.cars);
  }
  
  private handleError(error){
    console.log("error occuered " + error)
  }

  private viewCar(vin:string){
    console.log("routing");
    this.router.navigateByUrl("/view-car?vin=" + vin);
  }

  public getAllCars():void{
    this.carService.listAllCars().subscribe(
      cars=> this.setCars(cars), error => console.log("error occured " + error)
    );
  }

}
