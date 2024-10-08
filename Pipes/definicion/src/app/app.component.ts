import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'definicion';

  //propiedades 
  nombre='Juan Carlos';
  saldo = 1000.50;
  dias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
  articulos = [
    {codigo: 1, descripcion: 'papas', precio: 12.33},
    {codigo: 2, descripcion: 'manzanas', precio: 20.2},
    {codigo: 3, descripcion: 'peras', precio: 15.20},
  ]

  fechaActual = new Date();
}
