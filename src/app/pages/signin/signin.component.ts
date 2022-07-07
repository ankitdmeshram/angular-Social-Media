import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  email : any
  userLogin(val:any)
  {
    this.auth.signIn(val.email, val.password)
    if(sessionStorage.length)
    {
      if(sessionStorage.getItem('email'))
      {
        this.email = sessionStorage.getItem('email')
        this.router.navigateByUrl("/");
      }
    }
    
  }

}
