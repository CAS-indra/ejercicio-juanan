import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contacto', loadChildren: () => import('./contacto/contacto.module').then(m => m.ContactoModule) },
  { path: 'auth/login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'transaction/new', loadChildren: () => import('./nueva-transaccion/nueva-transaccion.module').then(m => m.NuevaTransaccionModule) },
  { path: 'transaction', loadChildren: () => import('./transaccion/transaccion.module').then(m => m.TransaccionModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
