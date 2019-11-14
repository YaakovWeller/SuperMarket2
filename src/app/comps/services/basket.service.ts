import { Injectable } from '@angular/core';
import { NavServiceService } from './nav-service.service';
import { DrinksPanelComponent } from '../panel/drinks-panel/drinks-panel.component';
import { DrinksServiceService } from './drinks-service.service';
import { CookingServiceService } from './cooking-service.service';
import { SnacksServiceService } from './snacks-service.service';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
public items: {}[] = [];
  constructor(public navServ : NavServiceService, public drinkServ : DrinksServiceService,
              public cookingServ : CookingServiceService, public snackServ : SnacksServiceService) { }
addItem(){
  switch (this.navServ.currentPanel) {
    case 'drinks':
    this.items.push(this.drinkServ.drinks[this.drinkServ.currentIndex]);
      break;
    case 'cooking':  
    // this.items.push(this.cookingServ.cooking[this.cooking.currentIndex]);
      break;
    case 'snacks':
    // this.items.push(this.snackServ.snacks[this.snackServ.currentIndex]);
      break;
    default:
      break;
  }
}
            
}
