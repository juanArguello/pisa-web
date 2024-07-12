import { Component } from '@angular/core';

@Component({
	selector: 'app-page-not-fount',
	standalone: true,
	imports: [],
	templateUrl: './page-not-fount.component.html',
	styleUrl: './page-not-fount.component.css'
})
export class PageNotFountComponent {

	public page: string = "Página no encontrada";
	public contenido: string = "¡No pudimos encontrar esa página!.";
	public error: string = "Error 404 Not Found";
	public fecha: Date = new Date();

	constructor(){}
}
