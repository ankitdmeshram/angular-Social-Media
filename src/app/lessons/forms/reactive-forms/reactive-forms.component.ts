import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from "@angular/forms"

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // loginForm = new FormGroup({
  //   name: new FormControl('', [Validators.required]),
  //   password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   email: new FormControl('', [Validators.required, Validators.email])
  // })

  // userLogin(val:any)
  // {
  //   console.log(val)
  // }

  // get name()
  // {
  //   return this.loginForm.get('name')
  // }
  // get pass()
  // {
  //   return this.loginForm.get('password')
  // }
  // get email()
  // {
  //   return this.loginForm.get('email')
  // }

  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-z]+$'), Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  })

  login(val:any)
  {
    console.log(val)
  }

  get name(){
    return this.loginForm.get('name')
  }
  get pass(){
    return this.loginForm.get('password')
  }

}
