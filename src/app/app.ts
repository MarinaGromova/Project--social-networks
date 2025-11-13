import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from './common-ui/profile-card/profile-card';
import { ProfileInter } from './data/interfaces/profile.interface';
import { Profile } from './data/services/profile';

@Component({
  selector: 'app-root',
  imports: [ProfileCard, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('project--social-networks');
  profileService = inject(Profile);

  profiles: ProfileInter[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val) => {
      this.profiles = val;
    });
  }
}
