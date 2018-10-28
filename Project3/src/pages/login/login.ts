// import { FirebaseProvider } from providers/firebase/firebase;

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreateAccountPage } from '../create-account/create-account';
import { Users } from "../../models/user";
import { ForgotPasswordPage } from '../forgot-password/forgot-password';


import {  AngularFireAuth  } from 'angularfire2/auth';
import firebase, { User } from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {



  forgot(){
    this.navCtrl.push(ForgotPasswordPage);
  }

  userstuff = {} as Users;
    
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

  async login(userstuff: Users){
    try{
      const result = this.fire.auth.signInWithEmailAndPassword(userstuff.email, userstuff.password);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
        
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
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