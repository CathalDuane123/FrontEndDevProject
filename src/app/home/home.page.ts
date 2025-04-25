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

  //Allows the program to access storage
  constructor(private storage:Storage) {}

  //When the user enters the file whatever is saved is added to the 
  //previously declared variables
  async ionViewWillEnter()
  {
    await this.storage.create();
    this.movie = await this.storage.get('movie');
    this.ticket = await this.storage.get('ticket');
    this.email = await this.storage.get('email');
  }

  //Clears the selection
  async onButtonClick() 
  {
    //this.movie = await this.storage.get('movie');
    //this.ticket = await this.storage.get('ticket');
    //this.email = await this.storage.get('email');
    
    
    if (this.movie == "" || this.ticket == 0 || this.email == "")
    {
      alert("Please Enter details before purchase.");
    }
    else
    {
      alert("Thank you for your purchase.");
      //await this.storage.remove("movie")
      //await this.storage.remove("ticket")
      //await this.storage.remove("email")
      await this.storage.clear();
      //Clears the selection after purchase
      this.movie = "";
      this.ticket = 0;
      this.email = "";
    }

  }

}

//To run PWA locally: npx http-server www -p 8081
