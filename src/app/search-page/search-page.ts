import { Component, inject, signal } from '@angular/core';
import { ProfileCard } from '../common-ui/profile-card/profile-card';
import { ProfileInter } from '../data/interfaces/profile.interface';
import { ProfileService } from '../data/services/profile';

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss',
})
export class SearchPage {
  protected readonly title = signal('project--social-networks');
  profileService = inject(ProfileService);

  profiles: ProfileInter[] = [];

  constructor() {
    this.profileService.getTestAccounts().subscribe((val) => {
      this.profiles = val;
    });
  }
}
