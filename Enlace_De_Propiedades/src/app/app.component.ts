import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Enlace_De_Propiedades';

  nombre = ''

  fijarNombre1(){
    this.nombre = 'Juan';
  }

  fijarNombre2(){
    this.nombre = 'Ana';
  }
}
