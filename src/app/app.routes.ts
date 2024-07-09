import { Routes } from '@angular/router';
import { ContactosComponent } from './contactos/contactos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { PageNotFountComponent } from './page-not-fount/page-not-fount.component';

export const routes: Routes = [
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: '**', component: PageNotFountComponent }
   

];
