import { Component } from '@angular/core';

@Component({
	selector: 'app-page-not-fount',
	standalone: true,
	imports: [],
	templateUrl: './page-not-fount.component.html',
	styleUrl: './page-not-fount.component.css'
})
export class PageNotFountComponent {

	public fecha: Date = new Date();

	constructor(){
		
	}
}
