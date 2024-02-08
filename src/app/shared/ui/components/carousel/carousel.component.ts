import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SliderInterface, carousel } from './carousel';
import { DragScrollComponent } from 'ngx-drag-scroll';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @ViewChild('carousel') sliderContainer!: ElementRef;
  @ViewChild("nav", { read: DragScrollComponent })
  ds!: DragScrollComponent;

  slides: SliderInterface[] = carousel;
  currentIndex: number = 0;
  interval: any;

  moveLeft() {
    this.currentIndex =
    (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.ds.moveTo(this.currentIndex);
  }
 moveRight() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.ds.moveTo(this.currentIndex);
  }
  moveTo(index:number) {
    this.currentIndex=index
    this.ds.moveTo(index);
  }
  ngOnInit(): void {
    this.startInterval();
  }

  ngOnDestroy(): void {
    this.clearInterval();
  }

  startInterval(): void {
    this.interval = setInterval(() => {
      // this.onScrollRight();
      this.moveRight();
    }, 3000);
  }

  clearInterval(): void {
    clearInterval(this.interval);
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.scrollSliderToCurrentIndex();
  }

  ngAfterViewInit() {}

  trackById(_index: any, feature: SliderInterface): number {
    return feature.id;
  }

  onScrollLeft() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.scrollSliderToCurrentIndex();
  }

  onScrollRight() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.scrollSliderToCurrentIndex();
  }

  get sliderCardWidth(): number {
    const width = getComputedStyle(
      this.sliderContainer.nativeElement.firstChild
    ).width;
    return +width.match(/(\d*)\w/)![1];
  }

  private scrollSliderToCurrentIndex() {
    const width = this.sliderCardWidth;
    const scrollPosition = width * this.currentIndex;
    this.sliderContainer.nativeElement.scroll({
      left: scrollPosition,
      behavior: 'smooth',
    });
  }
}
