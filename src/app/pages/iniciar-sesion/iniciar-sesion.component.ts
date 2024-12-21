import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iniciar-sesion',
  standalone: false,
  
  templateUrl: './iniciar-sesion.component.html',
  styleUrl: './iniciar-sesion.component.css'
})
export class IniciarSesionComponent {

  user = {
    correo: '',
    password: ''
  };

  // Simulación de datos de usuario para prueba
  registeredUsers = [
    { correo: 'cliente@ejemplo.com', password: '123456' },
    { correo: 'empresa@ejemplo.com', password: '654321' }
  ];


  // Método para manejar el inicio de sesión
  onLogin() {
    const foundUser = this.registeredUsers.find(
      u => u.correo === this.user.correo && u.password === this.user.password
    );

    if (foundUser) {
      // Alerta de éxito con SweetAlert2
      Swal.fire({
        icon: 'success',
        title: '¡Inicio de sesión exitoso!',
        text: 'Has iniciado sesión correctamente.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      });
    } else {
      // Alerta de error con SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}