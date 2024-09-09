import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-selector-numerico',
  standalone: true,
  imports: [],
  templateUrl: './selector-numerico.component.html',
  styleUrl: './selector-numerico.component.css'
})
export class SelectorNumericoComponent {

  @Input() minimo: number = 1;
  @Input() maximo: number = 1;

  actual:number = 1;

  ngOnInit(){
    this.actual = this.minimo;
  }

  incrementar(){
    if(this.actual < this.maximo){
      this.actual++;
    }
  }

  decrementar(){
    if(this.actual > this.minimo){
      this.actual--;
    }
  }

  fijar(numero:number){
    if(numero >= this.minimo && numero <=this.maximo){
      this.actual = numero;
    }
  }
}


