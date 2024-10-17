import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GraficotartaComponent } from "./graficotarta/graficotarta.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GraficotartaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vistaDiferida_LazyLoading';
}
