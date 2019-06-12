import { Component } from '@angular/core';
import { Testimony } from '../../shared/models/testimony';
import { TestimonyService } from '../../shared/services/testimony.service';

@Component({
  selector: 'page-exercise1',
  templateUrl: 'exercise1.html',
})

export class Exercise1Page {
  testimonies: Testimony[];
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
