import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  beverages: string[]

  constructor() {
    this.beverages = ['tea', 'coffee', 'milk', 'water']
  }

  deleteBeverage(i){
    this.beverages.splice(i,1)
  }

  addBeverage(){
    this.beverages.unshift('new item')
  }

}