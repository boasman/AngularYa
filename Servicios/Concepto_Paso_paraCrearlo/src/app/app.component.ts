import { Component, inject, Inject } from '@angular/core';
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
  title = 'Concepto_Paso_paraCrearlo';

  articulos : any;
  articuloS =  inject(ArticulosService);

  constructor(private articulosS: ArticulosService){
    this.articulos = this.articulosS.retornar();
  }
}
