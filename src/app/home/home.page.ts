import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, RouterLink, 
    IonButton
  ],
})
export class HomePage {
  movie:string="";
  ticket:number = 0;
  email:string="";

  constructor(private storage:Storage) {}

  async ionViewWillEnter()
  {
    await this.storage.create();
    this.movie = await this.storage.get('movie');
    this.ticket = await this.storage.get('ticket');
    this.email = await this.storage.get('email');
  }
}

//To run PWA locally: npx http-server www -p 8081
