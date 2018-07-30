import { Component, OnInit } from '@angular/core';
import { User } from "../../shared/models/user.model";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  currentUser: User = new User("test", 27);
  constructor() { }

  ngOnInit() {
  }

}
