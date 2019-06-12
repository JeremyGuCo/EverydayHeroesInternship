import { Component } from '@angular/core';
import { Testimony } from '../../shared/models/testimony';
import { TestimonyService } from '../../shared/services/testimony.service';

@Component({
  selector: 'page-exercise3',
  templateUrl: 'exercise3.html',
})
export class Exercise3Page {

  public testimonies: Testimony[] = [];
  public filterTestimonies: Testimony[] = [];
  public p: number = 1;

  constructor(private service: TestimonyService) {
  }

  ionViewDidLoad(): void {

    /**
     * Récupération de la base de données
     */
    this.service.getAll().subscribe((data: any) => {
      this.testimonies = data.testimonies;
      this.filterTestimonies = this.testimonies;
    })
  }

  /**
   * Méthode de filtrage des données
   * @param ev 
   */
  setFilteredWords(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.filterTestimonies = this.testimonies.filter((item) => {
        return (item.content.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.filterTestimonies = this.testimonies;
    }
  }
}
