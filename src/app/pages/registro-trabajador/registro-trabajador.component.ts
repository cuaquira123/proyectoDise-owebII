import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro-trabajador',
  standalone: false,
  templateUrl: './registro-trabajador.component.html',
  styleUrls: ['./registro-trabajador.component.css']
})
export class RegistroTrabajadorComponent {
  workerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Define el formulario y sus controles
    this.workerForm = this.fb.group({
      nombre: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      carnet_identidad: ['', [Validators.required]], // Nombre corregido
      telefono: ['', [Validators.required]],
      rubro: ['', [Validators.required]],
      habilidades: ['', [Validators.required]],
      contacto: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/ // Validación para email
          )
        ]
      ]
    });
  }

  onSubmit() {
    if (this.workerForm.valid) {
      console.log('Formulario enviado:', this.workerForm.value);

      // Alerta de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Registro exitoso!',
        text: 'El trabajador se ha registrado correctamente.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      });

      // Reinicia el formulario
      this.workerForm.reset();
    } else {
      // Alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Error en el formulario',
        text: 'Por favor, completa todos los campos requeridos.',
        confirmButtonColor: '#d33',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}