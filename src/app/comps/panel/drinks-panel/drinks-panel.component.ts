import { Component, OnInit } from '@angular/core';
import { DrinksServiceService } from '../../services/drinks-service.service';

@Component({
  selector: 'app-drinks-panel',
  templateUrl: './drinks-panel.component.html',
  styleUrls: ['./drinks-panel.component.css']
})
export class DrinksPanelComponent implements OnInit {

  constructor(public drinksService: DrinksServiceService) { }

  ngOnInit() {
  }

}
