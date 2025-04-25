import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons, 
  IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, IonButton, IonInput } from '@ionic/angular/standalone';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.page.html',
  styleUrls: ['./user-detail.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, 
    IonBackButton, IonButtons, IonItem, IonLabel, IonList, IonRadio, IonRadioGroup, 
    IonButton, IonInput]
})
export class UserDetailPage implements OnInit 
{
  email:string = "";
  emailEnd1:string = "@gmail.com";
  emailEnd2:string = "@atu.ie";

  constructor(private storage:Storage, private router:Router) { }
  //constructor(private storage:Storage){ }
  //constructor(private router:Router){ }
  ngOnInit() {
  }

  async onButtonClick() 
  {
    //console.log("Status: " + this.status);
    await this.storage.create();
    await this.storage.set('email', this.email);

    //Attempt to keep the user on the page 
    // until they input a valid email address

    if (!this.email.endsWith("@gmail.com"))
    {
      alert("Invalid email address. Try again.")
    }
    else if (this.email.endsWith("@gmail.com"))
    {
      this.router.navigateByUrl('/home')
    }

    //this.router.navigateByUrl('/home')
  }

  async ionViewWillEnter()
  {
    await this.storage.create();
    this.email = await this.storage.get('email');
  }

}
