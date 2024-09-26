import { Routes } from '@angular/router';
import { TablanroComponent } from './components/tablanro/tablanro.component';

export const routes: Routes = [
    {
        path: "tabla/:nro",
        component: TablanroComponent
    }
];
