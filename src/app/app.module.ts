import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpEndPoints } from "../providers/http-end-points";
//import { HttpUtil } from "../providers/http-util";
import { LoginPage } from "../pages/login/login";
import { Message } from "../shared/message";
import { IonicStorageModule } from '@ionic/storage';
import { Seccion } from "../shared/seccion";
import { LoadingSevice } from "../shared/loading";
import { ImagePicker } from '@ionic-native/image-picker';
import { HttpFailureUtil } from "../providers/http-failure-util";


@NgModule({
  declarations: [
    MyApp,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpEndPoints,
    HttpFailureUtil,
    Seccion,
    Message,
    LoadingSevice,
    ImagePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
