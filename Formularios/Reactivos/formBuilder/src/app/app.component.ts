import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formBuilder';

  resultado!: string;
  formularioContacto: FormGroup;

  constructor(private fb: FormBuilder){

    this.formularioContacto = this.fb.group({
      nombre: ['',[Validators.required, Validators.minLength(10)]],
      mail: ['',[Validators.required, Validators.email]],
      mensaje: ['',[Validators.required, Validators.maxLength(500)]]
    });
  }

  submit(){
    if(this.formularioContacto.valid){
      this.resultado = "Todos los datos son validos";
    }
    else{
      this.resultado ="Hay datos invalidos en el formulario";
    }
  }
  

 
}
