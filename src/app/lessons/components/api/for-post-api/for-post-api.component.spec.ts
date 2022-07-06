import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPostApiComponent } from './for-post-api.component';

describe('ForPostApiComponent', () => {
  let component: ForPostApiComponent;
  let fixture: ComponentFixture<ForPostApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForPostApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForPostApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
