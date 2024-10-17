import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css'
  styles:['.titulo{color:red; font-size: 2rem}', '.parrafo{color:black; font-size: 1.1rem}']
})
export class AppComponent {
  title = 'proyecto1';

  tit='Prueba de inline-style';
}
