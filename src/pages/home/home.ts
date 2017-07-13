import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductService } from "../../providers/product-service";
import { LoadingSevice } from "../../shared/loading";
import { HttpFailureUtil } from "../../providers/http-failure-util";
import { Product } from "../../models/product";

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

  paginaAtual: number = 1;
  qtdPagina: number = 5;
  qtdProdutos: number = 0;
  produtos: any[] = [];  // TODO: COLOCAR TIPAGEM  

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public service: ProductService, private erroResponse: HttpFailureUtil,
              private loadingService: LoadingSevice) {
  }

  ionViewDidLoad() {
    this.getTodosProdutos();
  }

  goToFormProduto(item: Product) {
    this.navCtrl.push('FormProdutos', {'item': item});
  }

  getTodosProdutos() {
    this.loadingService.criarLoading();

    this.service.todosProdutos().subscribe(
      resp => this.listarProdutos(resp),
      err => this.erroResponse.processarErros(err),
    );
    
    this.loadingService.fecharLoading();
  }

  listarProdutos(listaProdutos: any) {  //  MUDAR O TIPO DA VARIÁVEL
    //this.loadingService.fecharLoading();

    this.produtos = listaProdutos.products;    
    this.qtdProdutos = Number(listaProdutos.total);
  }

  maisProdutos() {
    this.paginaAtual ++;
    this.paginar();  
  }

  menosProdutos() {
    this.paginaAtual --;
    this.paginar();
  }

  paginar() {
    this.loadingService.criarLoading();

    this.service.getProdutosPaginar(this.paginaAtual, this.qtdPagina).subscribe(
      resp => this.listarProdutos(resp),
      err => this.erroResponse.processarErros(err),
    );

    this.loadingService.fecharLoading();
  }

}
