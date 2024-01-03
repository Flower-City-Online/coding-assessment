import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBoxSliderComponent } from './light-box-slider.component';

describe('LightBoxSliderComponent', () => {
  let component: LightBoxSliderComponent;
  let fixture: ComponentFixture<LightBoxSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LightBoxSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightBoxSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
