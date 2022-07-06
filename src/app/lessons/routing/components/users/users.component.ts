import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  id:any
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    console.warn("user id is ", this.route.snapshot.paramMap.get('id'))
  }
  

}
