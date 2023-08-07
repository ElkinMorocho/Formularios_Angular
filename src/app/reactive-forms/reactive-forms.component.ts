import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  savedFormData: any = null; // Variable para almacenar los datos

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      cedula: new FormControl('', Validators.required),
      nombre: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log(this.reactiveForm.value);
      this.showConfirmationMessage();
    }
  }
  showConfirmationMessage() {
    const message = '¡Formulario enviado con éxito!';
    window.alert(message);
  }
}
