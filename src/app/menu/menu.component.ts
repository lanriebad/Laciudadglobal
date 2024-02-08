import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  isMenuVisible = false;
  delayInterval = 200;
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isMenuVisible =
      this.isMenuVisible && (event.target as Window).innerWidth < 768;
  }

  onToggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  onHideMenu() {
    this.isMenuVisible = false;
  }
}
