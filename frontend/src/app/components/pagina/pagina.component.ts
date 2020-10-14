import { Component, OnInit } from '@angular/core';
// Pasar parámetros por la styleUrl
// 1. Cargar los componentes del Router
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

	// 4. Para mostrar el nombre por la pantalla. Crear la propiedad.
	public nombre: string;
	public apellido: string;

  constructor(
// 2. Cargamos dentro del constructor para poder utilizar los servicios del router
private _route: ActivatedRoute,
private _router: Router
  	) { }

  ngOnInit(): void {
  	// 3. Se recogen los parámetros de la URL
  	this._route.params.subscribe((params: Params) =>{
  		// La prueba con console.log
  		// console.log(params);
  		// 5. Le damos un valor a la propiedad
  		this.nombre = params.nombre;
  		this.apellido = params.apellido;
  		
  	});
  }

  redireccion(){
  	this._router.navigate(['/pagina-de-pruebas', 'Jomi', 'Borras']);
 }

}
