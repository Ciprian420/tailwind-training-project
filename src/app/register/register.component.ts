import { Component, OnInit } from '@angular/core';
import { FirebaseService} from "../services/firebase.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  isSignedIn = false

  constructor(
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
  handleLogout() {
    this.isSignedIn = false
  }
  signInVerification() {
    if (this.isSignedIn === true){
      return '/information'
    }
    else {
      return null
    }
  }
}
