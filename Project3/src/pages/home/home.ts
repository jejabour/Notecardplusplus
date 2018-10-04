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


  constructor(public navCtrl: NavController) {

  }

  toAbout(){
  
  this.navCtrl.push(AboutPage);
  
  }

  toCreate(){
    this.navCtrl.push(CreateCardPage);
  }

  toScience(){
    this.navCtrl.push(SciencePage)
  }

  toHistory(){
    this.navCtrl.push(HistoryPage)
  }

}
