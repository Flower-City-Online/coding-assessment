import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonsModule, ImageCardModule } from 'nextsapien-component-lib';
import { LightBoxSliderComponent } from './light-box-slider/light-box-slider.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonsModule, ImageCardModule, LightBoxSliderComponent, LoaderComponent],
  exports: [ButtonsModule, ImageCardModule, LightBoxSliderComponent, LoaderComponent],
})
export class EssentialsModule { }
