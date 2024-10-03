import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  url='https://ejerciciostutorialesya.com/angular/proyecto016/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private http: HttpClient) { }

  obtenerTodo(){
    return this.http.get(`${this.url}recuperartodos.php`);
  }

  agregar(articulos:any){
    return this.http.post(`${this.url}alta.php`,JSON.stringify(articulos))
  }

  eliminar(codigo: number){
    return this.http.delete(`${this.url}baja.php?codigo=${codigo}`);

  }

  actualizar(articulo: any){
    return this.http.put(`${this.url}modificacion.php`,JSON.stringify(articulo))
  }

  getById(codigo: number){
    return this.http.get(`${this.url}seleccionar.php?codigo=${codigo}`);
  }


}
