// 1. Se hace el import del core de angular instalado anteriormente
import { Component } from '@angular/core';

// 2. El decorador con las características y propiedades
@Component({
	selector: 'mi-componente',
	templateUrl: './mi-componente.component.html'
})

// 3. Se hace el export y vamos al app module
export class MiComponente{

	// 3.1 Se pueden definir propiedades
	public titulo: string;
	public comentario: string;
	public year: number;
	public mostrarPeliculas: boolean;


	constructor(){
		this.titulo = "Hola mundo soy un string con propiedades";
		this.comentario = "Soy un comentario con la propiedad string";
		this.year = 2020;
		this.mostrarPeliculas = true;

		console.log("Componente Mi-Componete cargado");
		console.log(this.titulo, this.comentario, this.year);
	}

	ocultarPeliculas() {
		this.mostrarPeliculas = false;
	}
}