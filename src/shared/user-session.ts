import { UserSeccion } from './../models/user-seccion';
import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
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
    userToken: string;

  constructor(private storage: Storage, public plt: Platform) {
  }

  get logado(): boolean {
    return this.userLogado;
  }

  getToken() {
    /*this.storage.get('token').then(token => {
      if (token) {
        return token;
      }
    });
    return null;*/

    let pro = new Promise((resolve, reject)=> {
      if (this.plt.is("cordova")) {
        this.storage.ready()
                      .then(() => {
                        this.storage.get("token").then(token => {
                          if (token) {
                            //this.userToken = token;
                            return token;
                          }
                          resolve();
                        })
                      });        
      } else {
        if (localStorage.getItem("token")) {
          //this.userToken = localStorage.getItem("token");
          return localStorage.getItem("token");
        }
        resolve();
      }
    });
    return pro;
  }

  set token(token: string) {
    //this.storage.set('token', '');

    if (this.plt.is("cordova")) {
      this.storage.set("token", token);
      this.userToken = token;    
    } else {
      localStorage.setItem("token", token);
      this.userToken = token;      
    } 


  }

  salvarUser(user: UserSeccion) {
    this.storage.set('userName', user.nome);
    this.storage.set('userEmail', user.email);
    this.storage.set('userImage', user.image);
    this.token = user.token;

    this.userLogado = true;    
  }

}
