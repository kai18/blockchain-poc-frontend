import { Injectable, Inject } from '@angular/core';
import {HttpClient, HttpParameterCodec} from '@angular/common/http';

import {AppConfig} from '../models/AppConfig.model';
import{Car} from '../models/car.model';
import { Observable } from 'rxjs';
import { Transaction } from '../models/Transaction.model';

@Injectable({
  providedIn: 'root'
})

export class BuyCarService {

  httpClient:HttpClient;
  constructor(httpClient:HttpClient) { 
    this.httpClient = httpClient;
  }

  public getCar(vin:string):Observable<Car>{
   return this.httpClient.get<Car>(AppConfig.SERVER_URL + "/car/"+vin);
  }

  public buyCar(transaction:Transaction):Observable<String>{
    return this.httpClient.post<String>(AppConfig.BUY_CAR, transaction);
  }
}
