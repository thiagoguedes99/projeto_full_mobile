import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpUtil } from "./http-util";
import { HttpEndPoints } from "./http-end-points";

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class Service {

  constructor(private http: Http, private endPoint: HttpEndPoints, private  httpUtil: HttpUtil) {
    console.log('Hello Service Provider');
  }

  logar() {
    let params = JSON.stringify(
			{ "username": 'usuario', "password": 'senha' });
		console.log('serviço');

      return this.http.post(this.endPoint.USER_LOGIN_POST, params, this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

}
