import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CreateCardPage } from '../create-card/create-card';
import { SciencePage } from '../science/science';
import { HistoryPage } from '../history/history';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  CreateCardPage: CreateCardPage;

  constructor(private fire: AngularFireAuth, private toast: ToastController, public navCtrl: NavController) {

  }

  // This page will only be loaded if the authentication is true, and if so, will display welcome message with their email
  // Toast means it's a message that pops up at the bottom apparently. Lol
  ionViewWillLoad(){
    this.fire.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to Notecard++,  ${data.email}`,
          duration: 3000
        }).present();
    }
    // If the auth doesn't pass, send em back to the login page
    else{
      this.navCtrl.setRoot(LoginPage);
    }
    });
  }

  // Sends to the about page upon click
  toAbout(){
  this.navCtrl.setRoot(AboutPage);
  }

  // Sends to the create card page upon click
  toCreate(){
    this.navCtrl.setRoot(CreateCardPage);
  }

  // Sends to the example Science page upon click, intended to be dynamically made
  toScience(){
    this.navCtrl.setRoot(SciencePage)
  }

  // Sends to the example History page upon click, intended to be dynamically made
  toHistory(){
    this.navCtrl.setRoot(HistoryPage)
  }

}
