import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto2';
  datos='';

  formularioContacto = new FormGroup({
    nombre: new FormControl(),
    mail:new FormControl(),
    mensaje: new FormControl(),    
  })

  submit(){
    
    //para mostrar el formulario en el navegador
    this.datos =  `Nombre=${this.formularioContacto.value.nombre}<br>
                  Mail=${this.formularioContacto.value.mail}<br>
                  Mensaje=${this.formularioContacto.value.mensaje}`;

    this.limpiarTextbox();       
            
  }

  limpiarTextbox(){
    this.formularioContacto.reset();  
  }

}

