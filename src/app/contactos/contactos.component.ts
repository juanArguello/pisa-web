import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { Observable, catchError, map, of } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { GoogleMapComponent } from '../google-map/google-map.component';


@Component({
    selector: 'app-contactos',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, GoogleMapComponent],
    templateUrl: './contactos.component.html',
    styleUrl: './contactos.component.css'
})
export class ContactosComponent {

    public tituloPagina: string = 'Contactos';

    

}