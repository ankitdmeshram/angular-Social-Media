import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }

  users()
  {
    return [
      {
        name: 'Ankit',
        age : 22,
        email: 'ankitdm69@gmail.com'
      },
      {
        name: 'meshram',
        age : 33,
        email: 'we3terg@gmail.com'
      },
      {
        name: 'karan',
        age : 44,
        email: 'dfsdddgs@gmail.com'
      }

    ]
  }

}
