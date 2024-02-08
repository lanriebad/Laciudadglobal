import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Specialization } from '../../../../home/models/specialization';
import * as AOS from 'aos';
@Component({
  selector: 'app-specialisation-card',
  templateUrl: './specialisation-card.component.html',
  styleUrls: ['./specialisation-card.component.scss'],
})
export class SpecialisationCardComponent implements OnInit, AfterViewInit {
  @Input() specialisation!: Specialization;
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.renderer.listen('window', 'load', () => {
      console.log('refreshed');
      AOS.refresh();
    });
  }
}
