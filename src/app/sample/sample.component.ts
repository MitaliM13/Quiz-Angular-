import { Component } from '@angular/core';
import {SampleDataService} from '../services/sample-data.service'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {
  locationData = [
    {place: "Thane", id: 2, weather:'Sunny'},
    {place: "Vashi", id: 3, weather:'Rainy'},
    {place: "Pune", id: 5, weather:'Humid'},
    {place: "Surat", id: 7, weather:'Humid'},
    {place: "Dadar", id: 8, weather:'sunny'},
  ]

  users:any

  constructor(private userData:SampleDataService){
    console.log(userData.users());
    this.users = userData.users()
  }
}
