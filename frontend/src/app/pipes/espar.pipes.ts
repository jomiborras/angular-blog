// 1. import
import {Pipe, PipeTransform } from '@angular/core';

// 2. utilizar el decorardor para idicar le nombre uq eva a tener el Pipe y se lo carga en app.module
@Pipe({
	name: 'espar'
})
export class EsParPipe implements PipeTransform{

	transform(value: any){
		var espar = "no es par";
		if(value % 2 == 0){
			espar = "es un numero par";
		}
		return "El año es " + value + " y " + espar;
	}
}