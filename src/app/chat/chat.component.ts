import { Component } from '@angular/core';

@Component({
    selector: 'app-chat',
    standalone: true,
    imports: [],
    templateUrl: './chat.component.html',
    styleUrl: './chat.component.css'
})
export class ChatComponent {
    url_api_whatsapp: string = 'https://api.whatsapp.com/send?phone=595981662048&text=%20Hola!%20Quiero%20contratar%20sus%20servicios!'
}
