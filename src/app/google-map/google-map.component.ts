import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
	selector: 'app-google-map',
	standalone: true,
	imports: [CommonModule, GoogleMapsModule],
	templateUrl: './google-map.component.html',
	styleUrl: './google-map.component.css'
})
export class GoogleMapComponent {
	
	constructor() { }

	ngOnInit(): void { }

	display: any;

	
	mapOptions: google.maps.MapOptions = {
        center: { lat: -25.347701, lng: -57.627233 },
        zoomControl: true,
		scrollwheel: true,
        zoom: 16
    }

    marker = {
        position: { lat: -25.347701, lng: -57.627233 },
    }

}
