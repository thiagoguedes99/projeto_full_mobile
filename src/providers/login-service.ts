import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
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
export class LoginService {

  //private deixar: boolean = true;

  constructor(private http: Http, private endPoint: HttpEndPoints, private  httpUtil: HttpUtil) {
    console.log('Hello Service Provider');
  }

  logar(username: string, password: string) {
    /*let params = JSON.stringify(
			{ "username": 'usuario', "password": 'senha' });*/
      let body = new URLSearchParams();
      body.append("username", username);
      body.append("password", password);

		console.log('serviço');

      return this.http.post(this.endPoint.USER_LOGIN_POST, body, this.httpUtil.headers())
	                .map(this.httpUtil.extrairDados)
	                .catch(this.httpUtil.processarErros);
  }

   /*get logado(): boolean {
    return this.deixar;
   }*/

}
