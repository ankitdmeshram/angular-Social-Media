import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata/userdata.service';

@Component({
  selector: 'app-for-user-services',
  templateUrl: './for-user-services.component.html',
  styleUrls: ['./for-user-services.component.css']
})
export class ForUserServicesComponent implements OnInit {

  users:any
  constructor(private usersData: UserdataService) { 
    this.users = usersData.users()
  }
  

  ngOnInit(): void {
    
  }

}
