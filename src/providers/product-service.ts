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

  constructor(public http: Http, private endPoint: HttpEndPoints) {
    console.log('Hello ProductService Provider');
  }

  todosProdutos() {
      //let body = new URLSearchParams();

      //body.append("email", username);  // ARRUMAR O BODY
      //body.append("password", password);

      return this.http.get(this.endPoint.PRODUCTS_ALL_GET)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

  produtoID(id: string) {
      let body = new URLSearchParams();

      body.append("id", id);
      //body.append("password", password);   // VERIFICAR CONEXÃO

      return this.http.get(this.endPoint.PRODUCTS_FIND_GET, body)// , this.httpUtil.headers()
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
      //body.append("password", password);

      return this.http.delete(this.endPoint.PRODUCTS_DELETE, body)// , this.httpUtil.headers()
	                .map(res => res.json());
  }

}
