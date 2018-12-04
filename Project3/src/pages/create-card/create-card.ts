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
 
// Creates a list of Notecards to be used
 notecardList$: Observable<Item[]>
  item: Item = {
     front: '',
    back: ''
 }


   constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, private notecard: NoteCardsService) {

    // Gets the notecard list, and I think snapshotChanges keeps it u[dated when a change is made
       this.notecardList$ = this.notecard.getNoteCardList().snapshotChanges().map( changes => {
           
        // grabs the changes and maps them to the key(?)
          return changes.map(c => ({
              key: c.payload.key, ...c.payload.val()
          }))
          
      }
    )
  }
  // Just a console output for if the page loade
   ionViewDidLoad() {
    console.log('ionViewDidLoad CreateCardPage');
  }

// ---------------------------
// This was an alert for one of the projects that would just say we're working on dynamic card creation

//  showAlert() {
//     const Alert = this.alertCtrl.create({
//       title: 'Alert',
//       //subTitle: '',
//       message: 'Dynamic Card Creation: to be implemented at a later date',
//       buttons: [
//       {
//         text:'OK',
//         handler: data => {
//           console.log('OK clicked');
//         }
//       }
//       ]
//     });
//     Alert.present();
//   }

// -------------------------

  // Add's an item to the database
   addItem(item: Item){
    this.notecard.addItem(item).then(ref =>{
      console.log(ref.key);
    })
  }

  // Removes an item
  removeItem(item: Item){
        this.notecard.removeItem(item);
 
  }
    
}