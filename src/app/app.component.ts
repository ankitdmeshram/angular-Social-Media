import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService) {}

  loginForm = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  registerForm = new FormGroup({
    email:new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })


  signin()
  {
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password)
  } 

  signup()
  {
    this.authService.signUp(this.registerForm.value.email, this.registerForm.value.password)
  } 



}
