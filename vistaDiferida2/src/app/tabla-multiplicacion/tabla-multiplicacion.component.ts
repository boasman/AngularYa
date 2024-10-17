import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-multiplicacion',
  standalone: true,
  templateUrl: './tabla-multiplicacion.component.html',
  styleUrls: ['./tabla-multiplicacion.component.css']
})
export class TablaMultiplicacionComponent implements OnInit {

  @Input() tabla:number=0;
  
  constructor() { }

  ngOnInit() {
  }

}
