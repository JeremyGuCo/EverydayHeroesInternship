import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-exercise1',
  templateUrl: 'exercise1.html',
})

export class Exercise1Page {
  temoignagesList: any;
  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public http: HttpClient,) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ionViewWillEnter() {
     this.http.get('./assets/data/dataMock.json').subscribe(data => {
      this.temoignagesList = data;
      console.log(this.temoignagesList)
 });
 }

}
