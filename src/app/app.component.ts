import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { Exercise1Page } from '../pages/exercise1/exercise1';
import { Exercise2Page } from '../pages/exercise2/exercise2';
import { Exercise3Page } from '../pages/exercise3/exercise3';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  exercise1: any = Exercise1Page;
  exercise2: any = Exercise2Page;
  exercise3: any = Exercise3Page;
  @ViewChild('content') content: NavController;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private menuCtrl: MenuController
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any) {
    this.content.setRoot(page);
    this.menuCtrl.close();
  }

}

