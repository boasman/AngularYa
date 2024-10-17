import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graficotarta',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './graficotarta.component.html',
  styleUrls: ['./graficotarta.component.css']
})
export class GraficotartaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
