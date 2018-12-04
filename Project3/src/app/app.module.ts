import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AboutPage } from '../pages/about/about';
import { CreateCardPage } from '../pages/create-card/create-card';
import { SciencePage } from '../pages/science/science';
import { HistoryPage } from '../pages/history/history';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage  } from '../pages/login/login';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { NoteCardsService } from '../models/NoteCardsService';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBZtSDsDNmBYq5N9ZteUGynJFHBGoEeJ4U",
    authDomain: "notecardplusplus.firebaseapp.com",
    databaseURL: "https://notecardplusplus.firebaseio.com",
    projectId: "notecardplusplus",
    storageBucket: "notecardplusplus.appspot.com",
    messagingSenderId: "530543939386"
  };
  


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AboutPage,
    CreateCardPage,
    SciencePage,
    HistoryPage,
    SettingsPage,
    LoginPage,
    CreateAccountPage,
    ForgotPasswordPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CreateCardPage,
    SciencePage,
    HistoryPage,
    SettingsPage,
    LoginPage,
    CreateAccountPage,
    ForgotPasswordPage
   
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteCardsService
  ]
})
export class AppModule {}
