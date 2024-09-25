import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule,Validator } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ValidacionesPropias } from './validaciones-propias';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto6';

  formularioContacto = new FormGroup({
    numero: new FormControl('',[ValidacionesPropias.multiplo5])
  }   
  );

  submit(){
    alert('dato correcto');
  }
}
