import { Component } from '@angular/core';
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

    public isMobile(){
        return this.browser.isMobile();
    }

    public isDesktop(){
        return this.browser.isDesktop();
    }

   
}
