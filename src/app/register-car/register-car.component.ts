import { Component, OnInit, Injectable } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatStepper, MatVerticalStepper, MatStep, MatFormField} from '@angular/material';

import {Car} from '../models/car.model';
import { CarService } from '../services/car-service.service';

@Component({
  selector: 'app-register-car',
  templateUrl: './register-car.component.html',
  styleUrls: ['./register-car.component.css']
})
@Injectable()
export class RegisterCarComponent implements OnInit {

  isLinear: false;
  carInformationFormGroup:FormGroup;
  userInformationFormGroup:FormGroup;
  private car:Car = new Car();

  constructor(private formBuilder: FormBuilder, private carService:CarService) { }

  ngOnInit() {
    this.carInformationFormGroup = this.formBuilder.group({
      vin: ['', Validators.required],
      model: ['', Validators.required],
      color:['', Validators.required],
      currentOwner: [window.localStorage.getItem("user"), Validators.required],
      modelYear: ['', Validators.required],
      company: ['', Validators.required],
    });
    this.userInformationFormGroup= this.formBuilder.group({});

  }

  private registerCar(car:Car):void{
    this.carService.registerCar(car).subscribe(
    );
  }

  private onSubmit(){
    this.car.vin = this.carInformationFormGroup.get('vin').value;
    this.car.company = this.carInformationFormGroup.get('company').value;
    this.car.model = this.carInformationFormGroup.get('model').value;
    this.car.color = this.carInformationFormGroup.get('color').value;
    this.car.currentOwner = window.localStorage.getItem("user");
    this.car.modelYear = this.carInformationFormGroup.get('modelYear').value;
    this.car.numberOfTimesSold = '0'
    
    console.log(this.car);

    this.carService.registerCar(this.car).subscribe();
  }



}
