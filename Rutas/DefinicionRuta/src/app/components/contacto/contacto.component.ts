import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {

  datos='';

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mansaje: new FormControl('')
  });

  submit(){
    this.datos = `Nombre=${this.formularioContacto.value.nombre}
                  Mail=${this.formularioContacto.value.mail}
                  Mensaje=${this.formularioContacto.value.mansaje}`
  }
}
