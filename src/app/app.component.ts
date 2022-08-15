import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import { FirebaseService} from "./services/firebase.service";
import {getAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'training project';
  isSignedIn = false
  constructor(
    public router: Router,
    public firebaseService: FirebaseService
  ) {}
  ngOnInit() {
    if (localStorage.getItem('user') !==null)
    {this.isSignedIn = true}
    else
    {this.isSignedIn = false}
  }
  async onSignup(email: string, password: string){
    await this.firebaseService.singUp(email, password)
    if (this.firebaseService.isLogged){
      this.isSignedIn = true
    }
  }
  async onSignin(email: string, password: string){
    await this.firebaseService.singUp(email, password)
    if (this.firebaseService.isLogged){
      this.isSignedIn = true
    }
  }
  handleLogout() {
this.isSignedIn = false
    localStorage.removeItem('user')
  }
}
