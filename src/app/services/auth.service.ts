import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  app = initializeApp(environment.firebaseConfig);
  auth = getAuth();

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password)
      .then((res) => {
        console.log("user registered successfully", res);
      })
      .catch((error) => {
        console.log(error)
      });
  }

  signIn(email:string, password:string)
  {
    return signInWithEmailAndPassword(this.auth, email, password)
    .then((res) => {
      console.log("user logged in successfully", res);
    })
    .catch((error) => {
      console.log(error)
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
