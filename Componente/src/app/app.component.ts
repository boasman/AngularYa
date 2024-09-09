import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./components/dado/dado.component";
import { CronometroComponent } from "./components/cronometro/cronometro.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent, CronometroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Componente';

  // resultado : string = '';

  // valor1: number = 0;
  // valor2: number =0;
  // valor3: number =0;

  // retornarAleatorio(){
  //   return Math.floor(Math.random() * 6 + 1);
  // }

  // tirar(){
    
  //   this.valor1 = this.retornarAleatorio();
  //   this.valor2 = this.retornarAleatorio();
  //   this.valor3 = this.retornarAleatorio();

  //   if(this.valor1 === this.valor2 && this.valor2 === this.valor3)
  //   {
  //     this.resultado = "Ha Ganado!";
  //   }
  //   else
  //   {
  //     this.resultado = "Ha Perdido!";
  //   }
  // }

  mensaje = '';

  actualizar(numero:number){
    this.mensaje = numero + '(Se actualiza cada 10 segundos)';
  }
}
