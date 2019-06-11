
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-exercise2',
  templateUrl: 'exercise2.html',
})
export class Exercise2Page {

  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
  public temoignagesList: any;
  public temoignages: any;
  public test: any;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public http: HttpClient) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ionViewWillEnter(): void {
    this.load();
  }


  load(): void {
    this.http.get('./assets/data/dataMock.json').subscribe(data => {
      this.temoignages = data;
      console.log(this.temoignages)});
    this.http
      .get('http://localhost:8000/tests/retrieve-data.php')
      .subscribe((data: any) => {
        this.temoignagesList = this.temoignages.concat(data.testimonies) ;
        console.log(data)
        console.log(this.temoignagesList);
      },
        (error: any) => {
          console.dir(error);
        });
  }

   
   }







