import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginService } from "../../providers/login-service";

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

  username: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private alertCtrl: AlertController, public service: LoginService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  fazerLogin() {
    this.service.logar(this.username, this.password).subscribe(
      resp => console.log(resp),
      err => alert(err), 
    );
  }

  goHomePage() {
    this.navCtrl.push("");
  }

  alert(err: string) {
    this.alertCtrl.create({
      title: 'Low battery',
    subTitle: '10% of battery remaining',
    buttons: ['Dismiss']
    }).present();
  }

}
