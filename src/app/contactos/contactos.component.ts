import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-contactos',
    standalone: true,
    imports: [CommonModule, HeaderComponent, GoogleMapsModule, FooterComponent],
    templateUrl: './contactos.component.html',
    styleUrl: './contactos.component.css'
})
export class ContactosComponent {

    public tituloPagina: string = 'Contactos';

    apiLoaded: Observable<boolean>;

    api_key: string = 'AIzaSyC4rVG7IsNk9pKUO_uOZuxQO4FmF6z03Ks';

    constructor(httpClient: HttpClient) {
        this.apiLoaded = httpClient.jsonp('https://maps.googleapis.com/maps/api/js?key='+this.api_key, 'callback')
            .pipe(
                map(() => true),
                catchError(() => of(false)),
            );
    }


    mapOptions: google.maps.MapOptions = {
        center: { lat: -25.347701, lng: -57.627233 },
        zoomControl: true,
        zoom: 14
    }

    marker = {
        position: { lat: -25.347701, lng: -57.627233 },
    }


}