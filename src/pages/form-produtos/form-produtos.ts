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

                this.productForm = this.formBuilder.group({
                  _id: [this.produto._id],
                  name: [this.produto.name, Validators.required],
                  description: [this.produto.description],
                  price: [this.produto.price, Validators.required],
                  image: [this.produto.image]
                });  
                
              }

  ionViewDidLoad() {
    this.id = this.navParams.get("id");
    if (this.id) {
      this.titulo = 'Editar produto'
      this.loadingSevice.criarLoading('Carregando Produto...');            
      this.service.produtoID(this.id).subscribe(
          resp => this.produto = resp,
          err => {
            this.loadingSevice.fecharLoading()
            this.erroResponse.processarErros(err)
          },
          );
        }
                
  }

  salvar() {
    this.loadingSevice.criarLoading();

    if (this.produto._id) {
      this.service.editarProduto(this.produto._id, this.productForm.value).subscribe(
        resp => this.message.enviarAlerta(resp.message),
        err => {
        this.loadingSevice.fecharLoading()
        this.erroResponse.processarErros(err)
      },
    );
  } else {
      this.service.salvarProduto(this.productForm.value).subscribe(
        resp => {
          this.message.enviarAlerta(resp.message),
          this.loadingSevice.fecharLoading()
        },
        err => {
          this.loadingSevice.fecharLoading()
          this.erroResponse.processarErros(err)
        },
      );
    }
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
