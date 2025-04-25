import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, 
  IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, 
    IonBackButton, IonButtons, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, 
    IonButton]
  })
export class MoviePage implements OnInit 
{
  movie:string = "";

  constructor(private storage:Storage, private router:Router) { }
  //constructor(private storage:Storage){ }
  //constructor(private router:Router){ }
  ngOnInit() {
  }

  async onButtonClick() 
  {
    //console.log("Status: " + this.status);
    await this.storage.create();
    await this.storage.set('movie', this.movie);
    alert("Thank you for your selection.")
    this.router.navigateByUrl('/home')
  }

  async ionViewWillEnter()
  {
    await this.storage.create();
    this.movie = await this.storage.get('movie');
  }

}
