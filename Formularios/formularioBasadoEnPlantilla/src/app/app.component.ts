import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularioBasadoEnPlantilla';

  // nombre = '';
  // apellido = '';

art = {
  codigo: 0,
  descripcion:'',
  precio:0
}

articulos= [
  {codigo: 1, descripcion: 'papas', precio: 10.55},
  {codigo: 2, descripcion: 'manzanas', precio: 12.10},
  {codigo: 3, descripcion: 'melon', precio: 53.20},
  {codigo: 4, descripcion: 'papas', precio: 17},
  {codigo: 5, descripcion: 'papas', precio: 20}
]

hayRegistros(){
  return this.articulos.length>0;
}

borrar(codigo: number){  

  this.articulos = this.articulos.filter(a=>a.codigo !== codigo);



  // for(let x = 0; x< this.articulos.length; x++){
  //   if(this.articulos[x].codigo === codigo){
  //     this.articulos.splice(x, 1);
  //   }
  // }
}

agregar(){

  if(this.art.codigo === 0){
    alert('Debe ingreser un codigo de articulo distinto de cero')
    return;
  }

  if(this.articulos.some(art => art.codigo === this.art.codigo)){
    alert("ya existe un articulo con ese codigo");
    return;
  }

  // for(let x = 0; x<this.articulos.length; x++){
  //   if(this.articulos[x].codigo === this.art.codigo){
  //     alert('Ya existe un articulo con ese codigo:' + this.art.codigo)
  //     return;
  //   }
  // }

  this.articulos.push({...this.art});

  // this.articulos.push({
  //   codigo: this.art.codigo,
  //   descripcion: this.art.descripcion,
  //   precio:this.art.precio
  // });

  this.limpiarFormulario();


}

limpiarFormulario(){
  this.art.codigo = 0;
  this.art.descripcion = '';
  this.art.precio = 0;
}

seleccionar(art: {codigo: number; descripcion:string; precio:number;}){
  this.art.codigo = art.codigo;
  this.art.descripcion = art.descripcion;
  this.art.precio = art.precio
}

modificar(){

const articulo = this.articulos.find(x=>x.codigo ===this.art.codigo);

if(articulo){
  articulo.descripcion = this.art.descripcion
  articulo.precio = this.art.precio;
  this.limpiarFormulario();
  return;
}
else{
  alert('No existe el codigo de articulo ingresado');
}


  // for(let x=0; x<this.articulos.length; x++){
  //   if(this.articulos[x].codigo ===  this.art.codigo){
  //     this.articulos[x].descripcion = this.art.descripcion;
  //     this.articulos[x].precio = this.art.precio;
  //     return;
  //   } 
  // }

}

}
