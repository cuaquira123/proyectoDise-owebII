import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { AcercaDeComponent } from './pages/acerca-de/acerca-de.component';
import { RegistroTrabajadorComponent } from './pages/registro-trabajador/registro-trabajador.component';
import { ListaTrabajadoresComponent } from './pages/lista-trabajadores/lista-trabajadores.component';
import { RegistroClienteComponent } from './pages/registro-clientes/registro-clientes.component';
import { IniciarSesionComponent } from './pages/iniciar-sesion/iniciar-sesion.component'; 
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AcercaDeComponent,
    RegistroTrabajadorComponent,
    ListaTrabajadoresComponent,
   RegistroClienteComponent,
    NavbarComponent,
    FooterComponent,
    IniciarSesionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
