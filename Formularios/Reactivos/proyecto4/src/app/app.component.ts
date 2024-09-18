import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto4';

  resultado = '';

  formAlumno = new FormGroup({
    dni: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl('')
    })
  });
  
  submit()
  {
    console.log('Entro al submit');
    if(this.formAlumno.value.notas){
      console.log('Entro al primar if');

      if(this.formAlumno.value.notas.nota1 && 
         this.formAlumno.value.notas.nota2 &&
         this.formAlumno.value.notas.nota3)
         {
          console.log('esta llena las tres notas')
            let nota1 = parseInt(this.formAlumno.value.notas.nota1);
            let nota2 = parseInt(this.formAlumno.value.notas.nota2);
            let nota3 = parseInt(this.formAlumno.value.notas.nota3);

            if(nota1 >= 4 && nota2 >= 4 && nota3 >= 4){
              console.log('Entro al segundo if');
              this.resultado = 'El alumno queda aprobado por esas notas';
            }
            else{
              this.resultado =  'El alumno no aprueba por esas notas';
              console.log('Entro al else');
            }
           
         }       
     }

  }
  

}
