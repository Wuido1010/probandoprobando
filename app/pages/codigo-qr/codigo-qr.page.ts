import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.page.html',
  styleUrls: ['./codigo-qr.page.scss'],
})
export class CodigoQrPage implements OnInit {

  constructor(private menuController: MenuController ) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
