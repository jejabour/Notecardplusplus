import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Users } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  // Creates a list(?) of User info
  user = {} as Users;

  constructor(private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  // Reports to the console
  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  // Makes an sync function (refer to the login.ts for async definition) that creates a username and password on Firebase, then directs user to the home page if successful
  async home(user: Users){
    try{
      const result = await this.afauth.auth.createUserWithEmailAndPassword(user.email, user.password);
      this.navCtrl.setRoot(HomePage);
      console.log(result);
    }
    catch (e) {
      console.error(e);
    }
    
  }

}
