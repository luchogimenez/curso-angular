import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  isLogged = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onLogin(){

  }
}
