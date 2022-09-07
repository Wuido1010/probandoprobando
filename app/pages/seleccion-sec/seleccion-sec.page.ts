import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-seleccion-sec',
  templateUrl: './seleccion-sec.page.html',
  styleUrls: ['./seleccion-sec.page.scss'],
})
export class SeleccionSecPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
}
