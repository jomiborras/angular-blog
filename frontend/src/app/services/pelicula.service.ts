// 1. Importar el objeto inyectable que permite aplicar un decorador a la clase. Cada vez que se utilice el servicio no se tendrá que crear el servicio "new"
import { Injectable } from '@angular/core';
// 2. Importar el modelo para utilizar el objeto
import { Pelicula } from '../models/peliculas';
// 3. Utilizar el decorador:
@Injectable()
// 4. Exportar la clase
export class PeliculaService{

	public peliculas: Pelicula[];

	constructor(){
		this.peliculas = [
			new Pelicula("The dark knight rises", 2016, "https://images-na.ssl-images-amazon.com/images/I/81BXv9uF8JL._AC_SL1334_.jpg"),
      		new Pelicula("Spiderman 4", 2020, "https://estaticos.elperiodico.com/resources/jpg/9/6/estrenos-semana-trailer-spider-man-lejos-casa-1562225869269.jpg"),
      		new Pelicula("Vengadores endgame", 2019, "https://i0.wp.com/wipy.tv/wp-content/uploads/2020/05/nuevo-poster-retro-de-avengers-endgame.jpg?w=1000&ssl=1")
		];
	}

	// 5. definir los métodos
	holaMundo(){
		return 'hola Mundo, soy un servicio de Angular';
	}

	getPeliculas(){
		return this.peliculas;
	}
// 6. Impotar en el component
}