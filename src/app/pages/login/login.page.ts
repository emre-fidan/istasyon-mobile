import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginBusiness } from 'src/app/business/LoginBusiness';
import { UserDto } from 'src/app/entities/DTO/UserDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private business:LoginBusiness, private injector: Injector) { 

  }

  loginForm = new FormGroup(
    {
      email: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
    });

  ngOnInit() {
  }

  public login() {
    if (!this.loginForm.valid) {
      return;
    }

    this.sendRequest();
  }

  private sendRequest() {
    var request = new UserDto;
    request.email = this.loginForm.value.email;
    request.password = this.loginForm.value.password;


    this.business.LoginRequest(request).subscribe((res) => {

      sessionStorage.setItem("userId", res.content.userId.toString());
      sessionStorage.setItem("name", res.content.name);
      sessionStorage.setItem("surname", res.content.surname);

      this.injector.get(Router).navigate(['/tabs/tab1']);
    });
  }
}
