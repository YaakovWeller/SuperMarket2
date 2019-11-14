import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/general/header/header.component';
import { FooterComponent } from './comps/general/footer/footer.component';
import { NavComponent } from './comps/general/nav/nav.component';
import { ArrowComponent } from './comps/general/arrow/arrow.component';
import { DrinksCardComponent } from './comps/cards/drinks-card/drinks-card.component';
import { SnacksCardComponent } from './comps/cards/snacks-card/snacks-card.component';
import { CookingCardComponent } from './comps/cards/cooking-card/cooking-card.component';
import { DrinksPanelComponent } from './comps/panel/drinks-panel/drinks-panel.component';
import { SnacksPanelComponent } from './comps/panel/snacks-panel/snacks-panel.component';
import { CookingPanelComponent } from './comps/panel/cooking-panel/cooking-panel.component';
import { BasketComponent } from './comps/panel/basket/basket.component';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ArrowComponent,
    DrinksCardComponent,
    SnacksCardComponent,
    CookingCardComponent,
    DrinksPanelComponent,
    SnacksPanelComponent,
    CookingPanelComponent,
    BasketComponent,

  ],
  imports: [
    BrowserModule, HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
