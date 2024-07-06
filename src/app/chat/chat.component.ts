import { Component, HostListener } from '@angular/core';
import { BrowserDetectorService } from '../services/browser-detector.service';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css'
})
export class ChatComponent {

    constructor(private browser: BrowserDetectorService) { }

    private mensaje: string = '%20Hola!%20Quiero%20contratar%20sus%20servicios!';
    public numeroTelefono: number = 595981662048;
    public url_api_whatsapp: string = 'https://api.whatsapp.com/send?phone=' + this.numeroTelefono + '&text=' + this.mensaje
    public isVisible: boolean = false;

    public isMobile(){
        return this.browser.isMobile();
    }

    public isDesktop(){
        return this.browser.isDesktop();
    }

   /*  @HostListener('window:scroll', [])
    onWindowScroll(): void {
        // Mostrar el botón cuando el usuario desplaza hacia abajo 20px desde la parte superior del documento
        this.isVisible = window.scrollY > 20;
    }

    scrollToTop(): void {
        // Desplazarse hacia arriba de la página
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } */
   
}
