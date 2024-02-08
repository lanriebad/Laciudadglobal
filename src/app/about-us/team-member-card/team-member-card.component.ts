import {Component, Input, OnInit} from '@angular/core';
import {TeamMember} from '../../home/models/team-member';

@Component({
  selector: 'app-team-member-card',
  templateUrl: './team-member-card.component.html',
  styleUrls: ['./team-member-card.component.scss']
})
export class TeamMemberCardComponent implements OnInit {
  @Input() teamMember!: TeamMember;
  constructor() { }

  ngOnInit(): void {
  }

}
