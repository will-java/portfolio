import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild, inject } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { PortfolioDataService } from '../../services/portfolio-data.service';

register();

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Certifications implements AfterViewInit {
  private readonly portfolioData = inject(PortfolioDataService);

  readonly certificates = this.portfolioData.certificates;

  @ViewChild('swiperRef') swiperRef?: ElementRef<HTMLElement & { initialize: () => void }>;

  ngAfterViewInit(): void {
    const swiperElement = this.swiperRef?.nativeElement;

    if (!swiperElement) {
      return;
    }

    Object.assign(swiperElement, {
      loop: true,
      navigation: true,
      pagination: { clickable: true },
      autoplay: { delay: 2800, disableOnInteraction: false },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 16 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        1024: { slidesPerView: 3, spaceBetween: 24 },
      },
    });

    swiperElement.initialize();
  }
}
