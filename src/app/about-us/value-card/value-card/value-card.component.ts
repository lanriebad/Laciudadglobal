import { Component, Input, OnInit } from '@angular/core';
import { CoreValues } from 'src/app/home/models/core-values';

@Component({
  selector: 'app-value-card',
  templateUrl: './value-card.component.html',
  styleUrls: ['./value-card.component.scss'],
})
export class ValueCardComponent implements OnInit {
  @Input() valueItem!: CoreValues;
  constructor() {}

  ngOnInit(): void {}
}
