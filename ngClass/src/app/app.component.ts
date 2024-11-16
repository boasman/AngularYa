import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  estado1 = true;
  estado2 = false;
  title = 'ngClass';

  forma={
    'clase3 clase4': true
  }

  fijar(){
    this.forma['clase3 clase4'] = true;
  }

  eliminar(){
    this.forma['clase3 clase4'] = false;
  }

}
