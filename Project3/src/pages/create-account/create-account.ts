import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Users } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  user = {} as Users;

  constructor(private afauth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

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
