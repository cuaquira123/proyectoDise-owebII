import { Component } from '@angular/core';


@Component({
  selector: 'app-lista-trabajadores',
  standalone: false,
  
  templateUrl: './lista-trabajadores.component.html',
  styleUrl: './lista-trabajadores.component.css'
})
export class ListaTrabajadoresComponent {
  // Lista de trabajadores (esto normalmente vendría de un servicio)
  workers = [
    { nombre: 'Juan Pérez', rubro: 'Construcción', edad: '35', telefono: '7234511', contacto: 'juan@correo.com', habilidades: 'Albañil, Pintor', imagen: 'imagentrabajadores/juan-perez.png' },
    { nombre: 'María García', rubro: 'Electricidad', edad: '25', telefono: '6234521', contacto: 'maria@correo.com', habilidades: 'Instalaciones eléctricas', imagen: 'imagentrabajadores/maria-garcia.png' },
    { nombre: 'Carlos López', rubro: 'Plomería', edad: '40', telefono: '71234514', contacto: 'carlos@correo.com', habilidades: 'Reparación de tuberías', imagen: 'imagentrabajadores/carlos-lopez.png' },
    { nombre: 'Rudy Torres', rubro: 'Soldador', edad: '30', telefono: '7523451', contacto: 'rudy@correo.com', habilidades: 'Soldadura de metales', imagen: 'imagentrabajadores/rudy-torres.png' },
    { nombre: 'Luis González', rubro: 'Carpintería', edad: '27', telefono: '6234512', contacto: 'luis@correo.com', habilidades: 'Fabricación de muebles', imagen: 'imagentrabajadores/luis-gonzalez.png' },
    { nombre: 'Patricia Morales', rubro: 'Doméstica', edad: '22', telefono: '6234519', contacto: 'patricia@correo.com', habilidades: 'Limpieza, Cocina', imagen: 'imagentrabajadores/patricia-morales.png' },
    { nombre: 'Roberto Díaz', rubro: 'Transporte', edad: '48', telefono: '7234515', contacto: 'roberto@correo.com', habilidades: 'Conductor de camiones', imagen: 'imagentrabajadores/roberto-diaz.png' },
    { nombre: 'Sofía Vega', rubro: 'Veterinaria', edad: '28', telefono: '7643123', contacto: 'sofia@correo.com', habilidades: 'Cuidado de animales', imagen: 'imagentrabajadores/sofia-vega.png' },
    { nombre: 'Pedro Sánchez', rubro: 'Jardineria', edad: '31', telefono: '6451234', contacto: 'pedro@correo.com', habilidades: 'Paisajismo, Riego automático', imagen: 'imagentrabajadores/pedro-sanchez.png' },
    { nombre: 'Isabel Romero', rubro: 'Gastronomía', edad: '37', telefono: '7523412', contacto: 'isabel@correo.com', habilidades: 'Chef profesional', imagen: 'imagentrabajadores/isabel-romero.png' },
    { nombre: 'Tomás Herrera', rubro: 'Comercio', edad: '34', telefono: '6234599', contacto: 'tomas@correo.com', habilidades: 'Ventas, Logística', imagen: 'imagentrabajadores/tomas-herrera.png' },
    { nombre: 'Laura Medina', rubro: 'Educación', edad: '29', telefono: '6123456', contacto: 'laura@correo.com', habilidades: 'Docente primaria', imagen: 'imagentrabajadores/laura-medina.png' },
    { nombre: 'Hugo Castro', rubro: 'Tecnología', edad: '26', telefono: '6123499', contacto: 'hugo@correo.com', habilidades: 'Desarrollador web', imagen: 'imagentrabajadores/hugo-castro.png' },
    { nombre: 'Andrea Vargas', rubro: 'Tramitador', edad: '32', telefono: '6345678', contacto: 'andrea@correo.com', habilidades: 'Gestión de trámites', imagen: 'imagentrabajadores/andrea-vargas.png' },
    { nombre: 'Miguel Ramírez', rubro: 'Construcción', edad: '42', telefono: '7654321', contacto: 'miguel@correo.com', habilidades: 'Supervisor de obra', imagen: 'imagentrabajadores/miguel-ramirez.png' }
  ];

  // Rubro seleccionado por el cliente
  selectedRubro: string = '';
  // Lista filtrada de trabajadores
  filteredWorkers = this.workers;

  // Método para filtrar trabajadores
  filterWorkers() {
    if (this.selectedRubro) {
      this.filteredWorkers = this.workers.filter(worker => 
        worker.rubro.trim().toLowerCase() === this.selectedRubro.trim().toLowerCase()
      );
    } else {
      this.filteredWorkers = this.workers;
    }
  }
}
