import { Component, OnInit } from '@angular/core';
import { DrinksServiceService } from '../../services/drinks-service.service';

@Component({
  selector: 'app-drinks-card',
  templateUrl: './drinks-card.component.html',
  styleUrls: ['./drinks-card.component.css']
})
export class DrinksCardComponent implements OnInit {

  constructor(public drinksServe: DrinksServiceService) { }

  ngOnInit() {
  }

}
