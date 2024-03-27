import { Component, Input, OnInit } from '@angular/core';
import { IonChip, IonCard, IonList, IonLabel, IonItem, IonButton, IonIcon, IonText,IonButtons, IonThumbnail, } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { bookmark } from 'ionicons/icons';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
  imports:[ IonChip, IonCard, IonList, IonLabel, IonItem,IonButton, IonIcon, IonThumbnail,IonText],
  standalone: true,
})
export class JobComponent  implements OnInit {

  @Input() job: any;

  constructor() {
    addIcons({bookmark});
   }

  ngOnInit() {}

}
