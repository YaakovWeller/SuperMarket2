import { Component, OnInit } from '@angular/core';
import { ArrowServiceService } from '../../services/arrow-service.service';
import { BasketService } from '../../services/basket.service';

@Component({
  selector: 'app-arrow',
  templateUrl: './arrow.component.html',
  styleUrls: ['./arrow.component.css']
})
export class ArrowComponent implements OnInit {

  constructor(public arrowServ: ArrowServiceService, public basketServ: BasketService) { }

  ngOnInit() {
  }

}
