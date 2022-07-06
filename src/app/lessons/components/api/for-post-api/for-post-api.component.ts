import { Component, OnInit } from '@angular/core';
import { RandomApiService } from 'src/app/lessons/services/api/random-api.service';
@Component({
  selector: 'app-for-post-api',
  templateUrl: './for-post-api.component.html',
  styleUrls: ['./for-post-api.component.css']
})
export class ForPostApiComponent implements OnInit {

  constructor(private randomApi: RandomApiService) { }

  ngOnInit(): void {
  }

  submitForm(val:any)
  {
    this.randomApi.saveData(val).subscribe((res) => {
      console.log(res)
    })
  }

}
