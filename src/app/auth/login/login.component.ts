import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService) { }

  login(formData: NgForm) {
    this.authService.login(formData.value.email, formData.value.password);
  }

  register(formData: NgForm) {
    this.authService.register(formData.value.email, formData.value.password);
  }

  loginAsTest() {
    this.authService.login('test@test.com', 'test1234');
  }

}
