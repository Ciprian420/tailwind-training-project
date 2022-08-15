import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { FirebaseService } from "../services/firebase.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
popUpState = false

  @Output() isLogout = new EventEmitter<void>()
  constructor(public firebaseService: FirebaseService) { }
showPopup() {
  this.popUpState = !this.popUpState
}
  ngOnInit(): void {
  }
logout(){
this.firebaseService.logOut()
  this.isLogout.emit()
}
}
