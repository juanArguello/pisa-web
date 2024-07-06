import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { GoogleMapComponent } from '../google-map/google-map.component';


@Component({
    selector: 'app-contactos',
    standalone: true,
    imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, GoogleMapComponent],
    templateUrl: './contactos.component.html',
    styleUrl: './contactos.component.css'
})
export class ContactosComponent {

    public nombreEmpresa: string = 'Proveedora Integral S.A.';
    public tituloPagina: string = 'Contactos';
    public direccion: string = '5 de Junio 659 c/ Nanawa. Lambaré - Paraguay';
    public correo: string = 'contacto@pisa.com.py';
    public telefono: string = '+595 981 662 048';
    public linkInstagram: string = 'https://www.instagram.com/proveedora_integral_sa';
    public linkGoogleMaps: string = "https://maps.app.goo.gl/AoWemygNLzx63k119";
    

    

}