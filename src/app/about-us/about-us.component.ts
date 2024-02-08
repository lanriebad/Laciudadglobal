import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MANAGEMENT_TEAM, TeamMember } from '../home/models/team-member';
import { SPECIALISATIONS, Specialization } from '../home/models/specialization';
import { COREVALUES, CoreValues } from '../home/models/core-values';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  @ViewChild('specialization') specializationContainer!: ElementRef;
  managementTeam: TeamMember[] = MANAGEMENT_TEAM;
  specialisations: Specialization[] = SPECIALISATIONS;
  core_values: CoreValues[] = COREVALUES;

  constructor() {}

  ngOnInit(): void {}

  onScrollLeft() {
    const width = this.specializationCardWidth;
    this.specializationContainer.nativeElement.scroll({
      left: this.specializationContainer.nativeElement.scrollLeft + width,
      behavior: 'smooth',
    });
  }

  onScrollRight() {
    const width = this.specializationCardWidth;
    this.specializationContainer.nativeElement.scroll({
      left: this.specializationContainer.nativeElement.scrollLeft - width,
      behavior: 'smooth',
    });
  }

  trackById(_index: any, member: TeamMember | Specialization | CoreValues) {
    return member.id;
  }

  get specializationCardWidth(): number {
    const width = getComputedStyle(
      this.specializationContainer.nativeElement.firstChild
    ).width;
    return +width.match(/(\d*)\w/)![1];
  }
}
