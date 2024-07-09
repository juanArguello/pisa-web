import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [RouterLink, NgOptimizedImage],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {
	public historiaNarrativa: string = "IECOM SRL es una empresa joven que desde el año 2011 " +
		"participa activamente en el crecimiento y desarrollo de sus " +
		"clientes brindando servicios y soluciones tecnológicas con " +
		"calidad e innovación en el mercado. Una empresa " +
		"comprometida con sus clientes y que apuesta al crecimiento " +
		"sostenible en todos sus aspectos, basándose en la gestión " +
		"dinámica, proactiva y emprendedora de nuestros proyectos y " +
		"servicios, respaldada en la confianza en nuestros " +
		"profesionales y de nuestros clientes. " +
		"Los servicios principales son el mantenimiento evolutivo, " +
		"consultoría en ingeniería de sistemas eléctricos-electrónicos y " +
		"telecomunicaciones así como el soporte técnico de las " +
		"soluciones ofrecidas a través de nuestros profesionales que se " +
		"encargan del análisis, diseño, implementación y optimización " +
		"de las soluciones.";
	
}
