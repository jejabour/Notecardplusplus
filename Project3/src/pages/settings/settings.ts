import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {  AngularFireAuth  } from 'angularfire2/auth';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }


  // Use Firebase's neat signout feature to sign the user out and kick them to the login page
  logout(){
    this.fire.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }


}
