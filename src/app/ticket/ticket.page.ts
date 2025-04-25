import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, 
  IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonButton } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component
({
  selector: 'app-ticket',
  templateUrl: './ticket.page.html',
  styleUrls: ['./ticket.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, 
    IonBackButton, IonButtons, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, 
    IonButton]
  })
export class TicketPage implements OnInit 
{
  ticket:number = 0;

  constructor(private storage:Storage, private router:Router) { }
  //constructor(private storage:Storage){ }
  //constructor(private router:Router){ }
  ngOnInit() {
  }

  async onButtonClick() 
  {
    //console.log("Status: " + this.status);
    await this.storage.create();
    await this.storage.set('ticket', this.ticket);
    alert("Thank you for your purchase.")
    this.router.navigateByUrl('/home')
  }

  async ionViewWillEnter()
  {
    await this.storage.create();
    this.ticket = await this.storage.get('ticket');
  }

}
