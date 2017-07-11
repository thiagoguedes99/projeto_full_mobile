import { Injectable } from '@angular/core';
import { AlertController } from "ionic-angular";


@Injectable()
export class HttpFailureUtil {

	constructor(public alertCtrl: AlertController) {

	}

  	processarErros(erro: any) {
		 let body = JSON.parse(erro._body);
        
		this.alertCtrl.create({
        title: 'Erro',
        subTitle: body.message,
        buttons: ['OK']
    }).present();        

	}
}
