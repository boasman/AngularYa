import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto5';

  resultado = '';

  formularioContacto = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    mensaje: new FormControl('',[Validators.required, Validators.maxLength(500)])
  });

  Submit(): void{
    if(this.formularioContacto.valid){
      this.resultado = "Todos los datos son validos";
    }
    else{
      this.resultado = "Hay datos invalido en el formulario";
    }
  }


}
