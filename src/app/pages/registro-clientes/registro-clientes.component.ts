import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-clientes',
  standalone: false,
  templateUrl: './registro-clientes.component.html',
  styleUrl: './registro-clientes.component.css'
})
export class RegistroClienteComponent {
  // Variables del formulario
  tipoCliente: string = '';
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  password: string = '';
  confirmPassword: string = '';
  encargadoNombre: string = '';
  encargadoApellido: string = '';

  constructor() {}

  registerUser() {
    // Validación de campos requeridos
    if (!this.tipoCliente || !this.nombre || !this.correo || !this.telefono || !this.password || !this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos obligatorios.',
        confirmButtonColor: '#d33'
      });
      return;
    }
  
    // Validación de contraseñas
    if (this.password !== this.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Las contraseñas no coinciden.',
        confirmButtonColor: '#d33'
      });
      return;
    }
  
    // Simulación de registro exitoso
    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'El usuario ha sido registrado correctamente.',
      confirmButtonColor: '#28a745'
    });
  
    // Limpiar formulario
    this.clearForm();
  }

clearForm() {
  // Limpiar los campos
  this.tipoCliente = '';
  this.nombre = '';
  this.correo = '';
  this.telefono = '';
  this.password = '';
  this.confirmPassword = '';
  this.encargadoNombre = '';
  this.encargadoApellido = '';
}
}