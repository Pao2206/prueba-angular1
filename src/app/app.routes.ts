import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AutosComponent } from './pages/autos/autos.component';
import { GestionComponent } from './pages/gestion/gestion.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { DetallesAutosComponent } from './pages/detalles-autos/detalles-autos.component';
import { FormularioEditarComponent } from './pages/formulario-editar/formulario-editar.component';
import { Error404Component } from './pages/error404/error404.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'autos', component: AutosComponent },
    { path: 'gestion', component: GestionComponent },
    { path: 'empleados', component: EmpleadosComponent },
    { path: 'detalles-autos/:idAuto', component: DetallesAutosComponent },
    { path: 'editar/:idGestion', component: FormularioEditarComponent },
     
    { path: '', redirectTo: 'home' ,  pathMatch: 'full' },
    { path: '**', component: Error404Component }
];
