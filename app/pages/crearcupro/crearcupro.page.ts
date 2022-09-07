import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearcupro',
  templateUrl: './crearcupro.page.html',
  styleUrls: ['./crearcupro.page.scss'],
})
export class CrearcuproPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

usuario = {
  nombre:'',
  email: '',
  password:'',
  escuela:''
}

onSubmit(){
  console.log('submit');
  console.log(this.usuario);
}
}
