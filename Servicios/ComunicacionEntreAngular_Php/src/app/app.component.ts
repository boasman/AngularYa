import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticulosService } from './articulos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ComunicacionEntreAngular_Php';

  articulos: any;

  art={
    codigo:0,
    descripcion:"",
    precio:0
  }

  constructor(private articuloService: ArticulosService){
    this.recuperarTodos();
  }

  recuperarTodos(){
    this.articuloService.obtenerTodo().subscribe(data => this.articulos = data);
    //this.articulosServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
  }

  alta(){
    this.articuloService.agregar(this.art).subscribe((datos: any) => {
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    })
  }

  baja(codigo:number){
    this.articuloService.eliminar(codigo).subscribe((datos :any) => {
      if(datos['resultado']=='OK'){
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    })
  }

  modificacion(){
    this.articuloService.actualizar(this.art).subscribe((datos: any) => {
      if(datos['resultado'] == 'OK'){
        alert(datos['mensaje'])
        this.recuperarTodos();
      }
    })
  }

  seleccionar(codigo: number){
    this.articuloService.getById(codigo).subscribe((datos:any) => this.art = datos[0]);
  }

}
