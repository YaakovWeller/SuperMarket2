import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksPanelComponent } from './drinks-panel.component';

describe('DrinksPanelComponent', () => {
  let component: DrinksPanelComponent;
  let fixture: ComponentFixture<DrinksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
