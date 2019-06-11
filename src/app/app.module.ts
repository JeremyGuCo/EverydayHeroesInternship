import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ExercisesPage } from '../pages/exercises/exercises';
import { Exercise1Page } from '../pages/exercise1/exercise1';
import { Exercise2Page } from '../pages/exercise2/exercise2';
import { Exercise3Page } from '../pages/exercise3/exercise3';
import { File } from '@ionic-native/file';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ExercisesPage,
    Exercise1Page,
    Exercise2Page,
    Exercise3Page,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    NgxPaginationModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ExercisesPage,
    Exercise1Page,
    Exercise2Page,
    Exercise3Page,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,

  ]
})
export class AppModule {}
