import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnacksPanelComponent } from './snacks-panel.component';

describe('SnacksPanelComponent', () => {
  let component: SnacksPanelComponent;
  let fixture: ComponentFixture<SnacksPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnacksPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnacksPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
