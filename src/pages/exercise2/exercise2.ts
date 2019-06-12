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
} from '../../shared/models/testimony';
import { TestimonyService } from '../../shared/services/testimony.service';

@Component({
  selector: 'page-exercise2',
  templateUrl: 'exercise2.html',
})
export class Exercise2Page {

  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
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
