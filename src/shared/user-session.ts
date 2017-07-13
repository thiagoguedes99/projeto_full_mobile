import { UserSeccion } from './../models/user-seccion';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { Storage } from '@ionic/storage';

/*
  Generated class for the Seccion provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class UserSession {

    private userLogado: boolean = false;

  constructor(private storage: Storage) {
    console.log('Hello Seccion Provider');
  }

  get logado(): boolean {
    return this.userLogado;
  }

  get token() {
    this.storage.get('token').then(token => {
      if (token) {
        return token;
      }
    });
    return null;
  }

  set token(token: string) {
    this.storage.set('token', '');  
  }

  salvarUser(user: UserSeccion) {
    this.storage.set('userName', user.nome);
    this.storage.set('userEmail', user.email);
    this.storage.set('userImage', user.image);
    this.token = user.token;

    this.userLogado = true;    
  }

}
