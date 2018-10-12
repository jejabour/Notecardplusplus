import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CreateCardPage } from '../create-card/create-card';
import { SciencePage } from '../science/science';
import { HistoryPage } from '../history/history';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  CreateCardPage: CreateCardPage;

  constructor(public navCtrl: NavController) {

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
