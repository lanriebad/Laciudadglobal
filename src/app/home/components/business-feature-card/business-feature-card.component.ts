import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { BusinessFeature } from '../../models/business-feature';
import * as AOS from 'aos';

@Component({
  selector: 'app-business-feature-card',
  templateUrl: './business-feature-card.component.html',
  styleUrls: ['./business-feature-card.component.scss'],
})
export class BusinessFeatureCardComponent implements OnInit, AfterViewInit {
  @Input() feature!: BusinessFeature;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  isEvenIndex(index: number): boolean {
    console.log(index);
    return index % 2 === 0;
  }
  ngAfterViewInit() {
    this.renderer.listen('window', 'load', () => {
      AOS.refresh();
    });
  }
}
