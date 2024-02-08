import { Component, OnInit } from '@angular/core';
import {PARTNERS} from '../../../../data/partners';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners = PARTNERS;
  constructor() { }

  ngOnInit(): void {
  }

}
