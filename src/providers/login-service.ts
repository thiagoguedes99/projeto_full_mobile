import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpUtil } from "./http-util";
import { HttpEndPoints } from "./http-end-points";
import { AlertController } from "ionic-angular";

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class LoginService {

  //private deixar: boolean = true;

  constructor(private http: Http, private endPoint: HttpEndPoints) {
    
   }

  logar(username: string, password: string) {
      let body = new URLSearchParams();

      body.append("email", username);
      body.append("password", password);

      return this.http.post(this.endPoint.USER_LOGIN_POST, body)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

}
