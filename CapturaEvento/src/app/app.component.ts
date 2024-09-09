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
  title = 'CapturaEvento';

  contador = 1;

  incrementar(){
    this.contador++;
  }

  descrementar(){
    this.contador--;
  }
}
