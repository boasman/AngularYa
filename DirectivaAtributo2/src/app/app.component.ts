import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResaltadoDirective } from './resaltado.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ResaltadoDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  colorselect = "green";
  tamanoFuente = 30;

  cambiarColor = (col:string) => {
    this.colorselect = col;
  }

  agrandar(){
    this.tamanoFuente++;
  }

  achicar(){
    this.tamanoFuente--;
  }
}
