import { Injectable, EventEmitter } from '@angular/core';
import { NavServiceService } from './nav-service.service';
import { DrinksServiceService } from './drinks-service.service';


@Injectable({
  providedIn: 'root'
})
export class ArrowServiceService {
// public arrowEvent = new EventEmitter();
  constructor(public navServ: NavServiceService, public drinkServ: DrinksServiceService) { }
  
  // emitEvent(delta){
  // this.arrowEvent.emit(delta)
  // }
  moveItem(delta:number){
    let currentPanel = this.navServ.currentPanel
    switch (currentPanel) {
      case 'drinks':
        this.drinkServ.currentIndex = this.calcIndex(this.drinkServ.currentIndex, delta, this.drinkServ.drinks.length)
        break;
    
      default:
        break;
    }
  }

  calcIndex(currentIndex:number, delta:number, length:number):number{
    let x = (currentIndex + delta)% length;
    if(x > -1){return x}
    return length-1;
  }
}
