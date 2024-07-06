import { ChatComponent } from './chat/chat.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { HeaderComponent } from './header/header.component';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, ChatComponent, GoogleMapComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    //@HostBinding('attr.data-bs-theme') theme: 'dark' | 'light' | undefined;
    //themeService = inject(ThemeService);

    title = 'PISA';

    ngOnInit(): void {
        //this.theme = this.themeService.getTheme();
    }
}
