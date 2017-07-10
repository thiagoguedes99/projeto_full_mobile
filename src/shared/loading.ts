import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from "ionic-angular";

@Injectable()
export class LoadingSevice {

    public loading: any;


  constructor(private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    console.log('Hello Seccion Provider');
  }

  criarLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present();
  }
}