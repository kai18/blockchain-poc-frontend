import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Transaction} from '../models/Transaction.model';
import { BuyCarService } from '../services/buy-car-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-buy-car-dialog-component',
  templateUrl: './buy-car-dialog-component.component.html',
  styleUrls: ['./buy-car-dialog-component.component.css']
})
export class BuyCarDialogComponentComponent implements OnInit {

  transactionForm: FormGroup;
  constructor(private httpClient:HttpClient, private buyCarService:BuyCarService,
     private formBuilder:FormBuilder, public dialogRef: MatDialogRef<BuyCarDialogComponentComponent>,
     @Inject(MAT_DIALOG_DATA) public transaction: Transaction) { }

  ngOnInit() {
    console.log(this.transaction);
    this.transactionForm = this.formBuilder.group({
      vin: [{value:this.transaction.vin, disabled:true}],
      seller:[{value:this.transaction.seller, disabled:true}],
      buyer:[{value:this.transaction.buyer, disabled:false}],
      price: [{value:this.transaction.price, disabled:false}],
    });
    this.transactionForm.setValue(this.transaction.vin, {onlySelf:true});
    //console.log(this.transactionForm.getRawValue());
  }


  public onSubmit(){
    this.transaction.buyer = this.transactionForm.get("buyer").value;
    this.transaction.id = ''
    this.transaction.complete = false
    this.executeTransaction(this.transaction);
  }


  public executeTransaction(transaction: Transaction): void{
    this.buyCarService.buyCar(transaction).subscribe(status=>console.log(status));
  }

}
