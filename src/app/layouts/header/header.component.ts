import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email:any;
  constructor(private auth: AuthService,
    private router: Router) { 
      // console.log(auth.getUser())
      // auth.getUser().subscribe((user) => {
      //   console.log("user is: ", user)
      //   this.email = user?.email
      // })
      this.email = auth.getUser()
    }

  ngOnInit(): void {
  }

  async handleSignOut()
  {
    try {
        await this.auth.signOut();
        this.router.navigateByUrl("/signin");
        alert("Logged out succss")
        this.email = null;
    } catch (error) {
      alert("problem in signout")
      console.log("problem in signout")
    }
  }

}
