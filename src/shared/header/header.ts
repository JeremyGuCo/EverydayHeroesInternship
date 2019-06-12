import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';

@Component({
  selector: 'page-header',
  templateUrl: 'header.html',
})

export class HeaderPage {
  logo: string = "assets/imgs/Logo-EverydayHeroes-White.png";
  constructor(private menuCtrl: MenuController) {}

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
