
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Testimonies } from '../../models/testimonies';





@Component({
  selector: 'page-exercise3',
  templateUrl: 'exercise3.html',
})
export class Exercise3Page {

  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
  public temoignagesList: Testimonies[]=[];
  public filterData = [];
  public p: number = 1;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public http: HttpClient,
    ) {
  }


  onToggleMenu() {
    this.menuCtrl.open();
  }

  ionViewDidLoad(): void {

/**
 * Récupération de la base de données
 */
    this.http
      .get<Testimonies[]>('http://localhost:8000/tests/retrieve-data.php')
      .subscribe((data: any) => {
        this.temoignagesList = data.testimonies;
        this.filterData = this.temoignagesList;
      })
  }

  /**
   * Méthode de filtrage des données
   * @param ev 
   */
  setFilteredWords(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.filterData = this.temoignagesList.filter((item) => {
        return (item.content.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
