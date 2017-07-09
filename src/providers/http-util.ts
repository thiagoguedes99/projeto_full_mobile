import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ToastController } from "ionic-angular";

@Injectable()
export class HttpUtil {

  /*private API_URL: string = 'http://localhost:5000/api/';

	url(path: string) {
		return this.API_URL + path;
	}*/

	constructor(public toastCtrl: ToastController) {}

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
		  console.log(response);
		
    	let data = response.json();
    	return data || {};
  	}

  	processarErros(erro: any) {
		  let data = erro.json();

		  return data.message;
		  
	   //return Observable.throw('Erro acessando servidor remoto.');
	}

}
