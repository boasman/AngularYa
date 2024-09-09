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
  title = 'proyecto1';

  nombre = 'Rodriguez'
  edad = 15;
  email = "elvisbaosman@gmail.com";
  sueldos =[1700,1600,1900];
  activo = true;
  sitio='http://www.google.com';

  esActivo(){
    if(this.activo){
      return 'Trabajador Activo'
    }
    else{
      return 'Trabajador Inactivo'
    }
  }

  ulitmoTresSueldos(){
    let suma = 0
    for(let x =0; x < this.sueldos.length; x++)
      suma +=this.sueldos[x];
    return suma;    
  }
}
