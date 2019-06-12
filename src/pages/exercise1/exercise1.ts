import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Testimony } from '../../models/testimony';

@Component({
  selector: 'page-exercise1',
  templateUrl: 'exercise1.html',
})

export class Exercise1Page {
  testimonies: Testimony[];
  logo: string = "assets/imgs/Logo-EverydayHeroes-White.png";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public http: HttpClient, ) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  /**
   * Récupération des données json
   */
  ionViewWillEnter() {
    this.http.get<Testimony[]>('./assets/data/dataMock.json').subscribe(data => {
      this.testimonies = data;
    });
  }
  
}
