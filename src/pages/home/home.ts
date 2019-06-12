import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
  
  constructor(private menuCtrl: MenuController) { }

  openMenu() {
    this.menuCtrl.open();
  }

}