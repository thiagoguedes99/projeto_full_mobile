import { Injectable } from '@angular/core';

import { AlertController } from "ionic-angular";

@Injectable()
export class Message {


  constructor(private alertCtrl: AlertController) {
    console.log('Hello Seccion Provider');
  }

  enviarAlerta(err: string) {
    this.alertCtrl.create({
        title: 'Low battery',
        subTitle: err,
        buttons: ['Dismiss']
    }).present();
  }
}