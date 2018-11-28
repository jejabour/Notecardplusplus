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

  userstuff = {} as Users;

  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  resetPassword(userstuff: Users): any {
    return this.fire.auth.sendPasswordResetEmail(userstuff.email);
  }

}