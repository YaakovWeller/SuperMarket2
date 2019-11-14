import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CookingCardComponent } from './cooking-card.component';

describe('CookingCardComponent', () => {
  let component: CookingCardComponent;
  let fixture: ComponentFixture<CookingCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CookingCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CookingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
