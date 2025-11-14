import { Component, Input } from '@angular/core';
import { ProfileInter } from '../../data/interfaces/profile.interface';

@Component({
  selector: 'app-profile-card',
  imports: [],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  @Input() profile!: ProfileInter;
}
