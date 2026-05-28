import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  protected readonly profileImage = 'assets/img/profile.jpg';
  protected imageLoadFailed = false;

  protected onImageError(): void {
    this.imageLoadFailed = true;
  }
}
