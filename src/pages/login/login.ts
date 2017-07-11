import { LoadingSevice } from './../../shared/loading';
import { Seccion } from './../../shared/seccion';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserSeccion } from "../../models/user-seccion";
import { UserService } from "../../providers/UserService";
import { HttpFailureUtil } from "../../providers/http-failure-util";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService, LoadingSevice]
})
export class LoginPage {

  //private loading: any;

  username: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
               public service: UserService, private erroResponse: HttpFailureUtil,
               public loadingCtrl: LoadingController, private loadingSevice: LoadingSevice,
               private seccion: Seccion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  fazerLogin() {    
    this.loadingSevice.criarLoading('conectando....');

    this.service.logar(this.username, this.password).subscribe(
      resp => this.logarUser(resp),
      err => {
        this.loadingSevice.fecharLoading()
        this.erroResponse.processarErros(err)
      },
    );
  }

  logarUser(user: UserSeccion) {
    this.seccion.salvarUser(user);
    this.loadingSevice.fecharLoading();    
    this.goHomePage();
  }

  /*saveToken() {
    this.seccion.token = "";

  }*/

  goHomePage() {
    this.navCtrl.setRoot("Home");
  }
}
