import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private spinner: NgxSpinnerService, private router: Router) { }

  app = initializeApp(environment.firebaseConfig);
  auth = getAuth();

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        console.log("user registered successfully", res);
        alert("user registered successfully");
      })
      .catch((error) => {
        console.log(error)
        alert("user registered failed");

      });
  }

  signIn(email:string, password:string)
  {
    return signInWithEmailAndPassword(this.auth, email, password)
    .then((res) => {
      let tempemail:any = res.user.email
      sessionStorage.setItem('email', tempemail)
      sessionStorage.setItem('isLoggedIn', 'true')
      // console.log(res)
      this.router.navigateByUrl("/");
    })
    .catch((error) => {
      console.log("user logged in failed", error);
    });
  }

  getUser()
  {
    return this.auth.currentUser
  }

  signOut()
  {
    return this.auth.signOut()
  }

}
