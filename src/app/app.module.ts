import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpEndPoints } from "../providers/http-end-points";
import { LoginPage } from "../pages/login/login";
import { Message } from "../shared/message";
import { IonicStorageModule } from '@ionic/storage';
import { LoadingSevice } from "../shared/loading";
import { ImagePicker } from '@ionic-native/image-picker';
import { HttpFailureUtil } from "../providers/http-failure-util";
import { UserService } from "../providers/UserService";
import { UserSession } from "../shared/user-session";


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
    UserService,
    Message,
    LoadingSevice,
    ImagePicker,
    UserSession,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
