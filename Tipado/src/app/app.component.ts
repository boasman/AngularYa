import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tipado'; 


  ngOnInit() {
    let ope: Operacion = Operacion.Multiplicacion;
    this.mostrarOperacion(ope);
  }

  mostrarOperacion(operacion:Operacion) {
    switch (operacion) {
      case Operacion.Suma: {
        console.log('Operación actual: Suma ');
        break;
      }
      case Operacion.Resta: {
        console.log('Operación actual: Resta ');
        break;
      }
      case Operacion.Multiplicacion: {
        console.log('Operación actual: Multiplicacion ');
        break;
      }
      case Operacion.Division: {
        console.log('Operación actual: Division ');
        break;
      }
    }
  }
}
