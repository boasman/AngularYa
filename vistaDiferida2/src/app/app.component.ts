import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TablaMultiplicacionComponent } from './tabla-multiplicacion/tabla-multiplicacion.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TablaMultiplicacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vistaDiferida2';


  numeros = [...Array(9999).keys()].map(num => num + 2)
}
