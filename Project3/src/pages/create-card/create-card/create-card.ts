import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController} from 'ionic-angular';
import { Item } from '../../models/NoteCardItem';
import { NoteCardsService } from '../../models/NoteCardsService';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
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
 
 notecardList$: Observable<Item[]>

 item: Item = {

    front: '',
    back: ''
 }

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private notecard: NoteCardsService) {

      this.notecardList$ = this.notecard.getNoteCardList().snapshotChanges().map( changes => {

          
          return changes.map(c => ({
              key: c.payload.key, ...c.payload.val()
          }))
          
      }
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCardPage');
  }
 showAlert() {
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

  addItem(item: Item){
    this.notecard.addItem(item).then(ref =>{
      console.log(ref.key);
    })
  }
  removeItem(item: Item){

       delete[this.notecard.removeItem(item)];
 
  
  }
    
}

