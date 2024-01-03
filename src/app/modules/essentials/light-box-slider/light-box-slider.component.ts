import { NgForOf } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

declare var lightGallery;
declare var lgZoom;
declare var lgThumbnail;
@Component({
  selector: 'app-light-box-slider',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './light-box-slider.component.html',
  styleUrl: './light-box-slider.component.css'
})
export class LightBoxSliderComponent implements AfterViewInit {
  @Input() images: string[] = []
  @ViewChild("lightgallery") lightgallery: ElementRef;

  ngAfterViewInit(): void {
    setTimeout(() => {
      lightGallery(this.lightgallery.nativeElement, {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
      });
    }, 100);
  }
}
