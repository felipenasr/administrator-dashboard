import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesCrudComponent } from './employees-crud.component';

describe('EmployeesCrudComponent', () => {
  let component: EmployeesCrudComponent;
  let fixture: ComponentFixture<EmployeesCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeesCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
