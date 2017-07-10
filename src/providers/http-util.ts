import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController, AlertController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
//import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpUtil {

	constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {

	}

	headers() {
		let headersParams = { 'Content-Type': 'application/json' };
		if (localStorage['token']) {
			headersParams['Authorization'] = localStorage['token'];
		}
		let headers = new Headers(headersParams);
    	let options = new RequestOptions({ headers: headers });
    	return options;
	}

	extrairDados(response: Response) {
		  console.log('extrar dados');
		  
		  console.log(response);
		
    	let data = response.json();
    	return data || {};
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
