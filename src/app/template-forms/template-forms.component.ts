import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css']
})
export class TemplateFormComponent {
  cedula: string = '';
  nombre: string = '';
  fechaNacimiento: string = '';
  ciudad: string = '';

  onSubmit() {
    console.log('Formulario enviado:');
    console.log('Cédula:', this.cedula);
    console.log('Nombre:', this.nombre);
    console.log('Fecha de Nacimiento:', this.fechaNacimiento);
    console.log('Ciudad:', this.ciudad);
    window.alert('¡Formulario enviado con éxito!');

  }
}
