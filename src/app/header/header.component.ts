import { Component, ElementRef, HostListener, OnDestroy, ViewChild, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrowserDetectorService } from '../services/browser-detector.service';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
    public headers: string[] = ['Inicio', 'Nosotros', 'Productos', 'Servicios', 'Contacto'];
    public isOffcanvasOpen = false;
    //private plataforma = inject(BrowserDetectorService);
    constructor(){}

    public toggleOffcanvas() {
        this.isOffcanvasOpen = !this.isOffcanvasOpen;
    }    

    public closeNavbar() {
        this.isOffcanvasOpen = false;
    }

}
