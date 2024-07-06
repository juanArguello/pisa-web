import { Component, ElementRef, ViewChild, inject } from '@angular/core';
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
    public headers: string[] = ['Inicio', 'Nosotros', 'Productos', 'Servicios', 'Contactos'];
    private plataforma = inject(BrowserDetectorService);
    @ViewChild('navbarSupportedContent') navbarContent!: ElementRef;

    public closeMenu(){
        if (this.plataforma.isMobile()) {
            const navbarNav = this.navbarContent.nativeElement;
            if (navbarNav && navbarNav.classList.contains('show')) {
                navbarNav.classList.remove('show');
            }
        }
    }

    
}
