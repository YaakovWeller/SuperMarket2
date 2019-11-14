import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksCardComponent } from './snacks-card.component';

describe('SnacksCardComponent', () => {
  let component: SnacksCardComponent;
  let fixture: ComponentFixture<SnacksCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacksCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
