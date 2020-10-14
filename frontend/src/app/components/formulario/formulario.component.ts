import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

	// 1. Crear el objeto (al ser un objeto sencillo, no hace falta crear el modelo)
	public user: any;
	public campo: string;

  constructor() {
  	this.user = {
  		nombre: '',
  		apellido: '',
  		bio: '',
  		genero: ''
  	// 2. cargar el módulo en app.module

  	};
  }

  ngOnInit(): void {
  }

  onSubmit(){
  	alert("Enviado");
  	console.log(this.user);
  }

  hasDadoClick(){
  	alert('Evento: has dado click');
  }

  hasSalido(){
  	alert('Has Salido');
  }

}
