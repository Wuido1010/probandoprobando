import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearcu',
  templateUrl: './crearcu.page.html',
  styleUrls: ['./crearcu.page.scss'],
})
export class CrearcuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario = {
    nombre:'',
    email: '',
    password:'',
    carrera:''
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
