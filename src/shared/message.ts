import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from "ionic-angular";

@Injectable()
export class Message {


  constructor(public http: Http, private alertCtrl: AlertController) {
    console.log('Hello Seccion Provider');
  }

  enviarAlerta(err: string) {
    alert('foi aquijjjjaaaaa');
    console.log('login componente');
    
    this.alertCtrl.create({
        title: 'Low battery',
        subTitle: err,
        buttons: ['Dismiss']
    }).present();
  }
}