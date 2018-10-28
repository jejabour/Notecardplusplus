import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';
import { CreateCardPage } from '../pages/create-card/create-card';
import { SciencePage } from '../pages/science/science';
import { HistoryPage } from '../pages/history/history';
import { SettingsPage } from '../pages/settings/settings';
import { LoginPage  } from '../pages/login/login';
import { CreateAccountPage } from '../pages/create-account/create-account'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// import { FirebaseProvider } from '../providers/firebase/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

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
    ListPage,
    CreateCardPage,
    SciencePage,
    HistoryPage,
    SettingsPage,
    LoginPage,
    CreateAccountPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AboutPage,
    CreateCardPage,
    SciencePage,
    ListPage,
    HistoryPage,
    SettingsPage,
    LoginPage,
    CreateAccountPage
   
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
