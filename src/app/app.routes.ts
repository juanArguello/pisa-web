import { Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contactos', component: ContactosComponent }
   

];
