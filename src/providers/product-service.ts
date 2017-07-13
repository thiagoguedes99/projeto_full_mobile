import { Product } from './../models/product';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpEndPoints } from "./http-end-points";

/*
  Generated class for the ProductService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ProductService {

  constructor(private http: Http, private endPoint: HttpEndPoints) {
    console.log('Hello ProductService Provider');
  }

  todosProdutos() {
    return this.http.get(this.endPoint.PRODUCTS_ALL_GET, this.endPoint.headers())// , this.httpUtil.headers()
	                .map(res => res.json());
  }

  getProdutosPaginar(pagina: number, qtdProdutos: number) {
    console.log(pagina);
    console.log(qtdProdutos);
    let url = `${this.endPoint.PRODUCTS_ALL_GET}/${pagina}/${qtdProdutos}`;
    return this.http.get(url, this.endPoint.headers())// , this.httpUtil.headers()
	                .map(res => res.json());    
  }

  produtoID(id: string) {
      let body = new URLSearchParams();

      body.append("id", id);

      return this.http.get(this.endPoint.PRODUCTS_FIND_GET, body)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

  salvarProduto(produto: Product) {
      let body = new URLSearchParams();

      body.append("_id", produto._id);
      body.append("name", produto.name);
      body.append("description", produto.description);
      body.append("price", produto.price);
      body.append("image", produto.image);

      return this.http.post(this.endPoint.PRODUCTS_SAVE_POST, produto)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

  editarProduto(id: string, produto: any) { // COLOCAR TIPO NA VARIÁVEL
      let body = new URLSearchParams();

      body.append("id", id); // ISSO VAI NA URL DA CHAMADA
      body.append("password", 'password');  // COLOCAR VALORES DOS PRODUTOS, FAZER COM O JSON

      return this.http.put(this.endPoint.PRODUCTS_UPDATE_PUT, body)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

  deletarProduto(id: string) {
      let body = new URLSearchParams();

      body.append("email", id);

      return this.http.delete(this.endPoint.PRODUCTS_DELETE, body)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

}
