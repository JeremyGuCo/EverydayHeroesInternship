import { Component } from '@angular/core';
import { Testimony } from '../../shared/models/testimony';
import { TestimonyService } from '../../shared/services/testimony.service';

@Component({
  selector: 'page-exercise2',
  templateUrl: 'exercise2.html',
})
export class Exercise2Page {

  public testimonies: Testimony[] = [];

  constructor(private service: TestimonyService) { }

  ionViewWillEnter(): void {

    /**
     * Récupération de la base de données
     */
    this.service.getAll().subscribe((data: any) => {
      this.testimonies = data.testimonies;
    },
      (error: any) => {
        console.dir(error);
      });
  }


}
