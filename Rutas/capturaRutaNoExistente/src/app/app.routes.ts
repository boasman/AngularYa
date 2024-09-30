import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';

export const routes: Routes = [
    {
        path:'',
        component:InicioComponent
    },   
    {
        path: 'inicio',
        component: InicioComponent
    },
    {
        path:'mapa',
        component: MapaComponent
    },
    {
        path:'contacto',
        component: ContactoComponent
    },
    {
        path:'acercade',
        component:AcercaDeComponent
    },
    {
        path:'pagina404',
        component:Pagina404Component
    },
    {
        path:'**',
        redirectTo: 'pagina404'
    }
];
