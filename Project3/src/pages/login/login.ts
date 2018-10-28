// import { FirebaseProvider } from providers/firebase/firebase;

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreateAccountPage } from '../create-account/create-account';

/*
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 import {  AngularFireAuth  } from 'angularfire2/auth';

import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  google = {
     loggedin: false,
     name: '',
     profilePicture: '',
     email:''
  }
  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  home(){
    
    this.navCtrl.setRoot(HomePage);
    
  }
  createAccount(){
    this.navCtrl.push(CreateAccountPage);
  }
 

  googleSignin(){
  
      this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then( res => {
         console.log('From --Google--');
         console.log(res);
         this.google.loggedin = true;
         this.google.name = res.user.displayName;
         this.google.email = res.user.email;
         this.google.profilePicture = res.user.photoURL;
      })
      this.fire.authState.subscribe(loggedin =>{
        
         if(loggedin){   
             this.navCtrl.setRoot(HomePage);
             }
      });
     
  }
}