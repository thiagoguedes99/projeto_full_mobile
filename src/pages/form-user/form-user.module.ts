import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormUser } from './form-user';

@NgModule({
  declarations: [
    FormUser,
  ],
  imports: [
    IonicPageModule.forChild(FormUser),
  ],
  exports: [
    FormUser
  ]
})
export class FormUserModule {}
