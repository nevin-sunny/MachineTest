import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelrequestComponent } from './travelrequest.component';

describe('TravelrequestComponent', () => {
  let component: TravelrequestComponent;
  let fixture: ComponentFixture<TravelrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
