import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'secciones',
    loadChildren: () => import('./pages/secciones/secciones.module').then( m => m.SeccionesPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'codigo-qr',
    loadChildren: () => import('./pages/codigo-qr/codigo-qr.module').then( m => m.CodigoQrPageModule)
  },
  {
    path: 'seleccion-sec',
    loadChildren: () => import('./pages/seleccion-sec/seleccion-sec.module').then( m => m.SeleccionSecPageModule)
  },
  {
    path: 'finalizar-asistencia',
    loadChildren: () => import('./pages/finalizar-asistencia/finalizar-asistencia.module').then( m => m.FinalizarAsistenciaPageModule)
  },
  {
    path: 'inicio-es',
    loadChildren: () => import('./pages/inicio-es/inicio-es.module').then( m => m.InicioEsPageModule)
  },
  {
    path: 'fotoqr',
    loadChildren: () => import('./pages/fotoqr/fotoqr.module').then( m => m.FotoqrPageModule)
  },
  {
    path: 'finalizar-es',
    loadChildren: () => import('./pages/finalizar-es/finalizar-es.module').then( m => m.FinalizarEsPageModule)
  },
  {
    path: 'crearcu',
    loadChildren: () => import('./pages/crearcu/crearcu.module').then( m => m.CrearcuPageModule)
  },
  {
    path: 'crearcupro',
    loadChildren: () => import('./pages/crearcupro/crearcupro.module').then( m => m.CrearcuproPageModule)
  },
  {
    path: 'bienvenidoal',
    loadChildren: () => import('./pages/bienvenidoal/bienvenidoal.module').then( m => m.BienvenidoalPageModule)
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
