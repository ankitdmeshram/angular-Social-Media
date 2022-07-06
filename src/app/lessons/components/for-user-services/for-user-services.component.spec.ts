import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForUserServicesComponent } from './for-user-services.component';

describe('ForUserServicesComponent', () => {
  let component: ForUserServicesComponent;
  let fixture: ComponentFixture<ForUserServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForUserServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForUserServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
