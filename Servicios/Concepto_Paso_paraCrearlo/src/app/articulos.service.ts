import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor() { }

  retornar(){

    return [
      {
        codigo: 1,
        descripcion: 'Papa',
        precio: 25.5
      },
      {
        codigo: 2,
        descripcion: 'Peras',
        precio: 30.8
      },
      {
        codigo: 3,
        descripcion: 'Manzanas',
        precio: 10.5
      },

    ]
  }
}
