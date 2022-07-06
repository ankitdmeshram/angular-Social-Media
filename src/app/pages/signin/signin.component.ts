import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  userLogin(val:any)
  {
    this.auth.signIn(val.email, val.password);
  }

}
