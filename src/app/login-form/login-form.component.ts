import { Component } from '@angular/core';
import { FreeapiService } from '../services/freeapi.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {

    email?: string;
    password?: string;
    firstName?: string = "";
    lastName?: string = "";
    userName?: string = "";

  constructor(private _freeApiService: FreeapiService){}

  onSubmit() {
    let inputs = {
      'Email': this.email,
      'Password': this.password,
      'FirstName': this.firstName,
      'LastName': this.lastName,
      'UserName': this.userName,
    };

    this._freeApiService.loginUser(inputs).subscribe(data => {
      data.status.statusCode == 200 ? localStorage.setItem("accessToken", data.accessToken) : console.log("Login Failed");
    });

  }
}
