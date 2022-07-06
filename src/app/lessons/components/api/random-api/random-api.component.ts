import { Component, OnInit } from '@angular/core';
import { RandomApiService } from 'src/app/lessons/services/api/random-api.service';

@Component({
  selector: 'app-random-api',
  templateUrl: './random-api.component.html',
  styleUrls: ['./random-api.component.css']
})
export class RandomApiComponent implements OnInit {
  entries: any
  constructor(public randomApiService: RandomApiService) {
    randomApiService.entries().subscribe((data) => 
    this.entries = data
    )
  }

  ngOnInit(): void {
  }

}
