import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormProdutos } from './form-produtos';

@NgModule({
  declarations: [
    FormProdutos,
  ],
  imports: [
    IonicPageModule.forChild(FormProdutos),
  ],
  exports: [
    FormProdutos
  ]
})
export class FormProdutosModule {}
