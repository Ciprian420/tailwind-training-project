import { Component, OnInit } from '@angular/core';
import {getAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
  }

}
