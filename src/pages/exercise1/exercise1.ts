import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Testimony } from '../../shared/models/testimony';
import { TestimonyService } from '../../shared/services/testimony.service';

@Component({
  selector: 'page-exercise1',
  templateUrl: 'exercise1.html',
})

export class Exercise1Page {
  testimonies: Testimony[];
  logo: string = "assets/imgs/Logo-EverydayHeroes-White.png";
  constructor(private service: TestimonyService) {
  }

  /**
   * Récupération des données json
   */
  ionViewWillEnter() {
    this.service.getDataMock().subscribe(data => {
      this.testimonies = data;
    });
  }
  
}
