import {
  Component
} from '@angular/core';
import {
  NavController,
  MenuController
} from 'ionic-angular';
import {
  HttpClient
} from '@angular/common/http';
import {
  File
} from '@ionic-native/file';
import {
  Observable
} from 'rxjs/Observable';
import {
  Testimony
} from '../../models/testimony';

@Component({
  selector: 'page-exercise2',
  templateUrl: 'exercise2.html',
})
export class Exercise2Page {

  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
  public testimonies: Testimony[] = [];

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public http: HttpClient,
    private file: File, ) {}

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ionViewWillEnter(): void {
    /**
     * Récupération de la base de données
     */
    this.http
      .get < Testimony[] > ('http://localhost:8000/tests/retrieve-data.php')
      .subscribe((data: any) => {
          this.testimonies = data.testimonies;
        },
        (error: any) => {
          console.dir(error);
        });
  }


}
