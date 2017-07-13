import { ProductService } from './../../providers/product-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product } from "../../models/product";
import { Message } from "../../shared/message";
import { LoadingSevice } from "../../shared/loading";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { HttpFailureUtil } from "../../providers/http-failure-util";

/**
 * Generated class for the FormProdutos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-form-produtos',
  templateUrl: 'form-produtos.html',
  providers: [ProductService]
})
export class FormProdutos {

  titulo: string = 'Novo Produto';
  produto: Product = new Product();
  productForm : FormGroup;
  id: any;
  erro: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private service: ProductService, private message: Message,
              private erroResponse: HttpFailureUtil, private loadingSevice: LoadingSevice,
              private formBuilder: FormBuilder, private imagePicker: ImagePicker) {
                
                if (this.navParams.get('item')) {
                  this.produto = this.navParams.get('item');
                }

                this.productForm = this.formBuilder.group({
                  _id: [this.produto._id],
                  name: [this.produto.name, Validators.required],
                  description: [this.produto.description],
                  price: [this.produto.price, Validators.required],
                  image: [this.produto.image]
                });
                
                }

  ionViewDidLoad() {
    /*if (this.navParams.get('item')) {
      
    this.produto = this.navParams.get('item');
    }

    if (this.produto._id) {
      this.titulo = 'Editar produto';
    }*/

  }
         // SERVE PARA FAZER UMA CHAMADA PELO ID DO PRODUTO       
      /*
      this.loadingSevice.criarLoading('Carregando Produto...');  
      this.service.produtoID(this.id).subscribe(
          resp => this.produto = resp,
          err => {
            this.loadingSevice.fecharLoading()
            this.erroResponse.processarErros(err)
          },
        );
      */

  salvar() {
    this.loadingSevice.criarLoading();

    if (this.produto._id) {
      this.service.editarProduto(this.produto._id, this.productForm.value).subscribe(
        resp => {
          this.message.enviarAlerta(resp.message);
          this.productForm.reset();
        },
        err => this.erroResponse.processarErros(err)
    );
  } else {
      this.service.salvarProduto(this.productForm.value).subscribe(
        resp => {
          this.message.enviarAlerta(resp.message);
          this.productForm.reset();
        },
        err => this.erroResponse.processarErros(err)
      );
    }

    this.loadingSevice.fecharLoading()    
  }

  foto() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 1,
      quality: 100,
      outputType: 1
    }

    this.imagePicker.getPictures(options).then((results) => {
      for(let img of results) {
        this.produto.image = 'data:image/jpeg;base64,' + img;
        break;
      }
    
    }, (err) => { console.log(this.erro = err) });
  }

}
