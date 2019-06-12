import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file';
import { Observable } from 'rxjs/Observable';
import { Testimonies } from '../../models/testimonies';

@Component({
  selector: 'page-exercise2',
  templateUrl: 'exercise2.html',
})
export class Exercise2Page {

  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
  public temoignagesList: Testimonies[]=[];
  public temoignages: any;

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public http: HttpClient,
    private file: File, ) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ionViewWillEnter(): void {

    /**
     *  Récupération des données json
     */
    this.http.get('./assets/data/dataMock.json').subscribe(data => {
      this.temoignages = data;
    });
     this.file.copyFile(this.file.applicationDirectory + '/www/assets/data', 'dataMock.json', this.file.applicationStorageDirectory, 'dataMock.json')
     .then(_=>console.log('Ok!')).catch(err=>console.log(err));
     this.file.writeFile(this.file.applicationStorageDirectory,'dataMock.json',JSON.stringify(this.temoignagesList), {append: true})
     .then(_=>console.log('Ok!')).catch(err=>console.log(err))
    
    /**
     * Récupération de la base de données
     */
    this.http
      .get<Testimonies[]>('http://localhost:8000/tests/retrieve-data.php')
      .subscribe((data: any) => {
        this.temoignagesList = data.testimonies ;
      },
        (error: any) => {
          console.dir(error);
        });
  }


}







