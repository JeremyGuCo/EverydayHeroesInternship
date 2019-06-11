
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { File } from '@ionic-native/file';
import { AndroidPermissions } from '@ionic-native/android-permissions';



@Component({
  selector: 'page-exercise3',
  templateUrl: 'exercise3.html',
})
export class Exercise3Page {

  logo: any = "assets/imgs/Logo-EverydayHeroes-White.png";
  public temoignagesList: any;
  public temoignages: any;
  public test: any;
  public filterData = [];
  public p: number = 1;
  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public http: HttpClient,
    private file: File,
    private androidPermissions: AndroidPermissions,) {
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

  ionViewDidLoad(): void {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);




    this.http.get('./assets/data/dataMock.json').subscribe(data => {
      this.temoignages = data;
      console.log(this.temoignages)});
    this.http
      .get('http://localhost:8000/tests/retrieve-data.php')
      .subscribe((data: any) => {
        this.temoignagesList = data.testimonies;
        this.file.writeFile(this.file.dataDirectory,"dataMock.json", JSON.stringify(this.temoignagesList), {append: true}).then(_=>console.log('Ok!')).catch(err=>console.log(err))
        this.filterData = this.temoignagesList;
      })
  }

  setFilteredWords(ev) {
    var val = ev.target.value;
    if (val && val.trim() != '') {
      this.filterData = this.temoignagesList.filter((item) => {
        return (item.content.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
