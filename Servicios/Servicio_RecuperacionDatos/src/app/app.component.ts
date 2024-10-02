import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Servicio_RecuperacionDatos';

  articulos: any;

  constructor(private articuloS: ArticulosService){
    console.log('entro al constructor');
    this.articuloS.retornar().subscribe(datos => this.articulos = datos);
  }
}
