import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { RegistroTrabajadorComponent } from './pages/registro-trabajador/registro-trabajador.component';
import { ListaTrabajadoresComponent } from './pages/lista-trabajadores/lista-trabajadores.component';
import { RegistroClienteComponent } from './pages/registro-clientes/registro-clientes.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component'; 

const routes: Routes = [

  { path: '',component: InicioComponent},
  { path: 'inicio', component: InicioComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'registro-trabajador', component: RegistroTrabajadorComponent },
  { path: 'lista-trabajadores', component: ListaTrabajadoresComponent },
  { path: 'registro-cliente', component: RegistroClienteComponent },
  { path: 'iniciar-sesion', component: IniciarSesionComponent },
  { path: '**', redirectTo: 'inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

