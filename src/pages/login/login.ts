import { Seccion } from './../../shared/seccion';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { LoginService } from "../../providers/login-service";
import { Message } from "../../shared/message";
import { HttpUtil } from "../../providers/http-util";
import { UserSeccion } from "../../models/user-seccion";

/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage {

  private loading: any;

  username: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
               public service: LoginService, private httpUtil: HttpUtil,
               public loadingCtrl: LoadingController,
               private seccion: Seccion) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  fazerLogin() {
    this.loading = this.loadingCtrl.create({
      content: 'Validando Email e Senha...'
    }).present();

    this.service.logar(this.username, this.password).subscribe(
      resp => this.logarUser(resp),
      err => this.httpUtil.processarErros(err),
      //()=> this.loading.dismiss()
    );
  }

  logarUser(user: UserSeccion) {
    this.seccion.salvarUser(user);
    this.loading.dismiss;
    this.goHomePage();
    //this.loading.onDismiss(/*() => this.dismiss()*/);
    //this.loading.dismiss().then(()=> this.goHomePage())
                          //.catch(() => this.goHomePage());
  }

  saveToken() {

    this.seccion.token = "";

  }

  goHomePage() {
    this.navCtrl.push("Home");
  }
}
