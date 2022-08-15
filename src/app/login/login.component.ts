import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignedIn = false
  constructor(
    public router: Router,
    public firebaseService: FirebaseService
  ) {}
  ngOnInit() {
  }
  async onSignin(email: string, password: string){
    await this.firebaseService.singIn(email, password)
    if (this.firebaseService.isLogged){
      this.isSignedIn = true
    }
  }
  handleLogout() {
    this.isSignedIn = false
  }
  signInVerification() {
    if (this.isSignedIn ){
      return '/information'
    }
    else {
      return null
    }
  }
}
