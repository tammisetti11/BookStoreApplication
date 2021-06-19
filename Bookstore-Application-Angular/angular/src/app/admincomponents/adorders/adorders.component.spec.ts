import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdordersComponent } from './adorders.component';

describe('AdordersComponent', () => {
  let component: AdordersComponent;
  let fixture: ComponentFixture<AdordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdordersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
