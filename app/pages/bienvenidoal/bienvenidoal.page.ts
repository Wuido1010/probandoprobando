import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bienvenidoal',
  templateUrl: './bienvenidoal.page.html',
  styleUrls: ['./bienvenidoal.page.scss'],
})
export class BienvenidoalPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  usuario = {
    email: '',
    password:'',
  }

  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }
}
