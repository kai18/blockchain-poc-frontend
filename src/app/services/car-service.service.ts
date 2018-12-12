import { Injectable } from '@angular/core';
import {HttpClient, HttpParameterCodec} from '@angular/common/http';
import { AppConfig } from '../models/AppConfig.model';
import { Observable } from 'rxjs';

import {Car} from '../models/car.model';

@Injectable({
  providedIn: 'root'
})

export class CarService {

  private httpClient:HttpClient;
  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  public listAllCars(): Observable<Car[]> {
    return this.httpClient.get<Car[]>(AppConfig.GET_ALL_CARS_URL);
  }

  public registerCar(car:Car):Observable<Car>{
    return this.httpClient.post<Car>(AppConfig.REGISTER_CAR_URL, car);
  }
}
