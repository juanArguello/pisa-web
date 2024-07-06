import { Component } from '@angular/core';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})
export class FooterComponent {
    public anho: string =  '2024';
    public empresaFooter: string = `© ${this.anho} Proveedora Integral S.A.`;
    public urlInstagram: string = "https://www.instagram.com/proveedora_integral_sa";
    public urlFacebook: string = "https://www.facebook.com/pisa";
}
