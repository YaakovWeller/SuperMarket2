import { Component, OnInit } from '@angular/core';
import { NavServiceService } from '../../services/nav-service.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  
  constructor(public navService: NavServiceService, public basketServ: BasketService) { }

  ngOnInit() {
  }
  
  changePanel(panelName: string):void{
    this.navService.currentPanel = panelName;
      }

}
