import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpEndPoints } from "./http-end-points";

/*
  Generated class for the Service provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserService {

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

   salvarUser(user: User) {
      return this.http.post(this.endPoint.USER_SAVE_POST, user)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

   editarUser(id: string, user: User) {
      return this.http.put(this.endPoint.USER_UPDATE_PUT + '/' + id, user)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

   deletarUser(id: string) {
      let body = new URLSearchParams();

      body.append("id", id);

      return this.http.delete(this.endPoint.USER_DELETE, body)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

  buscarUserID(id: string) {
    let body = new URLSearchParams();
    body.append("id", id);

    return this.http.put(this.endPoint.USER_UPDATE_PUT, body)// , this.httpUtil.headers()
	                .map(res => res.json());

  }

}
