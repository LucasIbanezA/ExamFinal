import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'lista-avisos',
    loadComponent: () =>
      import('./componentes/lista-avisos/lista-avisos.component').then(
        (m) => m.ListaAvisosComponent
      ),
  },
  {
    path: 'creacion-avisos',
    loadComponent: () =>
      import('./componentes/creacion-avisos/creacion-avisos.component').then(
        (m) => m.CreacionAvisosComponent
      ),
  },
  {
    path: '',
    redirectTo: 'lista-avisos',
    pathMatch: 'full', 
  },
  {
    path: '**',
    redirectTo: 'lista-avisos',
  },
];
