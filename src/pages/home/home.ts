import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { ExercisesPage } from '../exercises/exercises';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  exercises: any = ExercisesPage;
  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
  
  constructor(private menuCtrl: MenuController) { }

  openMenu() {
    this.menuCtrl.open();
  }

}