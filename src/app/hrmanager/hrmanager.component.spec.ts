import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmanagerComponent } from './hrmanager.component';

describe('HrmanagerComponent', () => {
  let component: HrmanagerComponent;
  let fixture: ComponentFixture<HrmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
