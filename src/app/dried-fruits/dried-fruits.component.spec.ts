import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriedFruitsComponent } from './dried-fruits.component';

describe('DriedFruitsComponent', () => {
  let component: DriedFruitsComponent;
  let fixture: ComponentFixture<DriedFruitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriedFruitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriedFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
