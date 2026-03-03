import { Routes } from '@angular/router';
import { listadoContactoPageComponent } from './pages/listado/listadoContacto-page.component';
import { ModificarPagesComponent } from './pages/modificar/modificarContacto-page.component';
import { NuevoSuperPageComponent } from './pages/nuevoSuper/nuevoContacto-super-page.component';

export const routes: Routes = [
  {
    path: '',
    component: listadoContactoPageComponent,
  },
  {
    path: 'nuevo-contacto',
    component: NuevoSuperPageComponent,
  },
  {
    path: 'modificar-contacto',
    component: ModificarPagesComponent,
  }
];
