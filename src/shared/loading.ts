import { Injectable } from '@angular/core';
import { LoadingController, Loading } from "ionic-angular";

@Injectable()
export class LoadingSevice {

    public loading: Loading;


  constructor(public loadingCtrl: LoadingController) {
  }

  criarLoading(msg?: string) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();

  }

  fecharLoading() {
    this.loading.dismiss();
  }
}