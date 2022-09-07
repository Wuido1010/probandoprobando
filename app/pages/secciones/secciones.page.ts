import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.page.html',
  styleUrls: ['./secciones.page.scss'],
})
export class SeccionesPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }
  mostrarMenu(){
    this.menuController.open('first');
  }
  usuario = {
    email: '',
    password:''
  }
  
  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }

}
