import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from "../../providers/product-service";
import { HttpUtil } from "../../providers/http-util";
import { LoadingSevice } from "../../shared/loading";

/**
 * Generated class for the Home page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ProductService, LoadingSevice]
})
export class Home {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service: ProductService, private httpUtil: HttpUtil,
              private Loading: LoadingSevice) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home');
    //this.Loading.criarLoading();
    this.getTodosProdutos();
  }

  getTodosProdutos() {
    this.service.todosProdutos().subscribe(
      resp => this.listarProdutos(resp),
      err => this.httpUtil.processarErros(err),
    );
  }

  listarProdutos(listaProdutos: any) {  //  MUDAR O TIPO DA VARIÁVEL
    //this.Loading.loading.dismiss();
    console.log(listaProdutos);
  }

}
