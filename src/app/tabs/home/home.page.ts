import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonHeader, IonThumbnail,IonMenu, IonToolbar, IonTitle, IonContent,IonCard, IonCardTitle, IonCardContent, IonCardSubtitle, IonCardHeader, IonMenuButton, IonButtons, IonIcon, IonRow, IonLabel, IonCol, IonText, IonSearchbar, IonButton, IonicSlides, IonListHeader, IonList } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { appsOutline, options } from 'ionicons/icons';
import { JobComponent } from 'src/app/components/job/job.component';
import { register} from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonList, IonListHeader, IonButton, IonText, IonCol, IonLabel, IonRow, IonIcon, IonSearchbar, IonButtons, IonCardSubtitle, IonThumbnail, IonMenu, IonCardContent, IonCardTitle, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader,IonMenuButton, IonIcon, JobComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit {
  
  swiperModules = [IonicSlides];
  popular: any[] = [];
  recent: any[] = [];

  constructor() {
    addIcons( {appsOutline, options });
  }
 
  ngOnInit(){
    this.popular = [
      { id: 1, company: 'Technyks LLC', location: 'New Delhi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'ct_dark.png', logo_light: 'ct_light.png' },
      { id: 2, company: 'Uber Technologie', location: 'Bangalore', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
      { id: 3, company: 'LinkedIn Corp.', location: 'Mumbai', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
    ];
    this.recent = [
      { id: 4, company: 'TikTok', location: 'New Delhi', expires_on: '30/11/23', post: 'Senior UX Designer', type: 'Full Time', salary: '$40-90k/year', logo_dark: 'tiktok_dark.png', logo_light: 'tiktok_light.png' },
      { id: 2, company: 'Uber Technologie', location: 'Bangalore', expires_on: '07/12/23', post: 'Full-Stack Developer', type: 'Full Time', salary: '$30-80k/year', logo_dark: 'uber_dark.png', logo_light: 'uber_light.png' },
      { id: 3, company: 'LinkedIn Corp.', location: 'Mumbai', expires_on: '15/12/23', post: 'Lead UX Designer', type: 'Full Time', salary: '$30-70k/year', logo_dark: 'linkedin_dark.png', logo_light: 'linkedin_light.png' },
    ];
  }
}
