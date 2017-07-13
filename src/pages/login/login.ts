import { Routers } from './../../shared/router';
import { LoadingSevice } from './../../shared/loading';
//import { Seccion } from './../../shared/seccion';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { UserSeccion } from "../../models/user-seccion";
import { UserService } from "../../providers/UserService";
import { HttpFailureUtil } from "../../providers/http-failure-util";
import { UserSession } from "../../shared/user-session";

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
url: any;
  username: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
               public service: UserService, private erroResponse: HttpFailureUtil,
               public loadingCtrl: LoadingController, private loadingSevice: LoadingSevice,
               private userSession: UserSession) {
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
    this.userSession.salvarUser(user);
    this.loadingSevice.fecharLoading();    
    this.goHomePage();
  }

  goToFormUser() {
    this.navCtrl.push("FormUser");
  }

  goHomePage() {
    this.navCtrl.setRoot("Home");
  }

  readUrl(event) {
  /*if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();

    reader.onload = (event) => {
      this.url = event.target.
    }

    reader.readAsDataURL(event.target.files[0]);
  }*/
console.log('aq');
  console.log(event);
  console.log(event.target.files);
  //this.url = event.target.files[0];
  this.url = event.target.value;
  console.log(event.target);
  //this.url = event.target.files[0];
  
}
}
