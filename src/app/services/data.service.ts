import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  fakeStore(id:number = -1)
  {
    if(id >= 0)
    {
      return this.http.get('https://fakestoreapi.com/products/'+id)
    } else 
    {
      return this.http.get('https://fakestoreapi.com/products')
    }
  }


}
