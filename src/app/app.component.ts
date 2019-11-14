import { Component } from '@angular/core';
import { NavServiceService } from './comps/services/nav-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperMarket';
  constructor(public navServ : NavServiceService){
    
  }
}
