import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './ui/components/banner/banner.component';
import { ContactUsWidgetComponent } from './ui/components/contact-us-widget/contact-us-widget.component';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from './ui/components/project-card/project-card.component';
import { SpecialisationCardComponent } from './ui/components/specialisation-card/specialisation-card.component';
import { PartnersComponent } from './ui/components/partners/partners.component';
import { CarouselComponent } from './ui/components/carousel/carousel.component';
import { DragScrollModule } from 'ngx-drag-scroll';

@NgModule({
  declarations: [
    BannerComponent,
    ContactUsWidgetComponent,
    ProjectCardComponent,
    SpecialisationCardComponent,
    PartnersComponent,
    CarouselComponent,
  ],
  exports: [
    BannerComponent,
    ContactUsWidgetComponent,
    ProjectCardComponent,
    SpecialisationCardComponent,
    PartnersComponent,
    CarouselComponent,
  ],
  imports: [CommonModule, RouterLink,DragScrollModule],
})
export class SharedModule {}
