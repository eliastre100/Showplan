import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { NewPage } from "../pages/new/new";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from "@ionic/storage";
import { ShowPage } from "../pages/show/show";
import { ComponentsModule } from "../components/components.module";
import { SetlistProvider } from '../providers/setlist/setlist';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    NewPage,
    ShowPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    NewPage,
    ShowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SetlistProvider
  ]
})
export class AppModule {}
