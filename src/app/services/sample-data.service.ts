import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SampleDataService {

  constructor() { }
  users(){
    return [
      {name:"Ally", age:25, email:"Ally@gmail.com"},
      {name:"Riya", age:23, email:"Riya@gmail.com"},
      {name:"Lily", age:27, email:"Liya@gmail.com"}
    ]
  }
}
