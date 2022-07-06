import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class RandomApiService {

  constructor(private http: HttpClient) { }

  url: string = 'https://api.publicapis.org/entries'
  url1: string = 'https://reqres.in/api/users'
  entries()
  { 
    return this.http.get(this.url)
  }

  saveData(val:any)
  {
    // console.log(val)
    return this.http.post(this.url1, val)
  }

}
