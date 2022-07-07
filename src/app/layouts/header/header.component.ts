import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email: any;
  constructor(private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.LoggedInStatus();
    }, 500)
  }

  LoggedInStatus() {
    console.log("login status checking")
    if (sessionStorage.length) {
      if (sessionStorage.getItem('email')) {
        this.email = sessionStorage.getItem('email')
      }
    } else {
      this.email = null
    }
  }

  handleSignOut() {
    this.spinner.show()
    try {
      this.auth.signOut();
      this.router.navigateByUrl("/signin");
      sessionStorage.clear()
      this.email = null;
    } catch (error) {
      alert("problem in signout")
      console.log("problem in signout")
    }
      this.spinner.hide();
  }





}
