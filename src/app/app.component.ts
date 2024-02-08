import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'laLuciad';
  CONTACT_US_WIDGET_PAGES: RegExp[] = [
    /^\/$/,
    /^\/about-us$/,
    /^\/what-we-do$/,
    /^\/projects[\d\w]*$/,
  ];
  showContactUsFooter = false;

  constructor(private router: Router, private renderer: Renderer2) {}

  ngOnInit() {
    AOS.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'load', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 100, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animatio
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showContactUsFooter = this.CONTACT_US_WIDGET_PAGES.some((url) =>
          url.test(event.url)
        );
        document
          .querySelector('.main-page-wrapper')!
          .scrollTo({ top: 0, behavior: 'smooth' });
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }
    });
  }
  ngAfterViewInit() {
    this.renderer.listen('window', 'load', () => {
      AOS.refresh();
    });
  }
}
