import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

/**
 * Generated class for the CreateCardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-card',
  templateUrl: 'create-card.html',
})
export class CreateCardPage {
 

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCardPage');
  }
 openAlert() {
    const Alert = this.alertCtrl.create({
      title: 'Alert',
      //subTitle: '',
      message: 'Dynamic Card Creation: to be implemented at a later date',
      buttons: [
      {
        text:'OK',
        handler: data => {
          console.log('OK clicked');
        }
      }
      ]
    });
    Alert.present();
  }

    
}

