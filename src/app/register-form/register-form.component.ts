import { FreeapiService } from './../services/freeapi.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {

  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  userName?: string;

  constructor(private _freeApiService: FreeapiService){}

  onSubmit() {
    let inputs = {
      'Email': this.email,
      'Password': this.password,
      'FirstName': this.firstName,
      'LastName': this.lastName,
      'UserName': this.userName,
    };

    this._freeApiService.registerUser(inputs).subscribe(data =>{
      console.log(data);
    });

  }
}
