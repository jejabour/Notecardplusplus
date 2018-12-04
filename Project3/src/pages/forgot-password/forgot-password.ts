import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  AngularFireAuth  } from 'angularfire2/auth';
import { Users } from "../../models/user";


@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})


export class ForgotPasswordPage {

   // Creates a list(?) of User info
  userstuff = {} as Users;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  // Logs to the console if the page loaded
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  // Does the amazing Firebase forgot password thing all by itself cuz it's amazing
  resetPassword(userstuff: Users): any {
    return this.fire.auth.sendPasswordResetEmail(userstuff.email);
  }

}
