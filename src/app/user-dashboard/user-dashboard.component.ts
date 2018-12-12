import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/Transaction.model';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../models/AppConfig.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  private transactions:Observable<Transaction[]>
  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
    this.getDashboard();
  }

  public requestDashboard(email: string): Observable<Transaction[]>{
    return this.httpClient.get<Transaction[]>(AppConfig.USER_DASHBOARD+"/"+email);
  }

  public getDashboard(): void{
    this.transactions = this.requestDashboard(window.localStorage.getItem("user"));
  }

  public confirmTransaction(transaction:Transaction):void{
    this.httpClient.post(AppConfig.SERVER_URL+'/transaction/confirm', transaction).subscribe(
    )
  }
}
