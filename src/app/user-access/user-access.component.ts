import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-access',
  templateUrl: './user-access.component.html',
  styleUrls: ['./user-access.component.css']
})
export class UserAccessComponent implements OnInit {

  userInfo:FormGroup;
  user:User;

  constructor(private formBuilder:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.userInfo = this.formBuilder.group({
      email:['', Validators.required],
      password: ['', Validators.required]
    })
  }

  public login(): void{
    this.user = new User();
    this.user.email = this.userInfo.get('email').value;
    this.user.password = this.userInfo.get('password').value
    window.localStorage.setItem("user", this.user.email);
    window.localStorage.setItem("password", this.user.password);
    this.router.navigate(['/car-listing'])

  }

}
