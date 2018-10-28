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

  ionViewWillLoad(){
    this.fire.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message: `Welcome to Notecard++, ${data.email}`,
          duration: 3000
        }).present();
    }
    else{
      this.navCtrl.setRoot(LoginPage);
    }
    });
  }

  toAbout(){
  
  this.navCtrl.setRoot(AboutPage);
  
  }

  toCreate(){
    this.navCtrl.setRoot(CreateCardPage);
  }

  toScience(){
    this.navCtrl.setRoot(SciencePage)
  }

  toHistory(){
    this.navCtrl.setRoot(HistoryPage)
  }

}
