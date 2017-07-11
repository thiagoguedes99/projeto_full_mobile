import { User } from './../../models/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserService } from "../../providers/UserService";
import { Message } from "../../shared/message";
import { LoadingSevice } from "../../shared/loading";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
import { HttpFailureUtil } from "../../providers/http-failure-util";


/**
 * Generated class for the FormUser page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-form-user',
  templateUrl: 'form-user.html',
  providers: [UserService]
})
export class FormUser {

  titulo: string = 'Novo Usuário';
  user: User = new User();
  userForm : FormGroup;
  id: any;
  erro: any;



  constructor(public navCtrl: NavController, public navParams: NavParams,
              private service: UserService, private message: Message,
              private erroResponse: HttpFailureUtil, private loadingSevice: LoadingSevice,
              private formBuilder: FormBuilder, private imagePicker: ImagePicker) {

                this.userForm = this.formBuilder.group({
                  _id: [this.user._id],
                  name: [this.user.name, Validators.required],
                  email: [this.user.email, Validators.required],
                  password: [this.user.password, Validators.required]
                });
                
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormUser');
    this.id = this.navParams.get("id");
    if (this.id) {
      this.titulo = 'Editar usuário'
      this.loadingSevice.criarLoading('Carregando Usuário...');            
      this.service.buscarUserID(this.id).subscribe(
          resp => this.user = resp,
          err => {
            this.loadingSevice.fecharLoading()
            this.erroResponse.processarErros(err)
          },
          );
        }
  }

  salvar() {
    this.loadingSevice.criarLoading();

    if (this.user._id) {
      this.service.editarUser(this.user._id, this.user).subscribe(
        resp => this.message.enviarAlerta(resp.message),
        err => {
        this.loadingSevice.fecharLoading()
        this.erroResponse.processarErros(err)
      },
    );
  } else { 
      this.service.salvarUser(this.userForm.value).subscribe(
        resp => this.message.enviarAlerta(resp.message),
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
        this.user.image = 'data:image/jpeg;base64,' + img;
        break;
      }
    
    }, (err) => { console.log(this.erro = err) });
  }

}
