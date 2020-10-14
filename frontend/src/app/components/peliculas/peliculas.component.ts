import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/peliculas';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

	public titulo: string;
  public peliculas: Pelicula[];
  public favorita: Pelicula;

  constructor(
    // CARGAR EL SERVICIO DENTRO DEL CONSTRUCTOR propiedad vinculada al servicio
    private _peliculaService: PeliculaService
    ) {
  	this.titulo = "Componente Pelicula";
  	// console.log("Constructor Lanzado");
    this.peliculas = this._peliculaService.getPeliculas();
  }

  ngOnInit(){
    console.log(this.peliculas);
  	console.log("Componente iniciado");
    // Por ejemplo, se puede cargar el servicio acá
    console.log(this._peliculaService.holaMundo());
  }

  ngDoCheck(){
  	console.log("DOCHECK LANZADO");
  }

  cambiarTitulo() {
  	this.titulo = "El titulo ha cambiado";
  }

  ngOnDestroy() {
  	console.log("El componente se va a eliminar de la ejecución");
  }

  mostrarFavorita(event){
    this.favorita = event.pelicula;
  }

}
