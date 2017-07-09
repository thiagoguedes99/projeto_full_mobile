import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Service } from "../../providers/service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Service]
})
export class HomePage {

  constructor(public navCtrl: NavController, private service: Service) {

    this.service.logar().subscribe(
      resp => console.log(resp),
      err => console.log(err), 
    );

  }

}
