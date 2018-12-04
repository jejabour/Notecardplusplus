// import { FirebaseProvider } from providers/firebase/firebase;

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CreateAccountPage } from '../create-account/create-account';
import { Users } from "../../models/user";
import { ForgotPasswordPage } from '../forgot-password/forgot-password';


import {  AngularFireAuth  } from 'angularfire2/auth';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

// Navigates to the forgot password page
  forgot(){
    this.navCtrl.push(ForgotPasswordPage);
  }

  // Creates a list(?) of User info
  userstuff = {} as Users;
    
  // Google login stuff
  google = {
     loggedin: false,
     name: '',
     profilePicture: '',
     email:''
  }


  constructor(private fire: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {}

  // Just a console check for if the Login paage loaded
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // Async - dopesn't do the function until the value from a promise is fulfilled
  async login(userstuff: Users){

    // This try catch sees if the user can login, if not, keep them on the login
    try{
      const result = this.fire.auth.signInWithEmailAndPassword(userstuff.email, userstuff.password);
      if(result){
        this.navCtrl.setRoot(HomePage);
      }
        
      // print the result
      console.log(result);
    }
    catch(e){
      console.error(e);
    }
  }

  // Sends em to the create account page
  createAccount(){
    this.navCtrl.push(CreateAccountPage);
  }
 
  // Obvs google sign in stuff
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