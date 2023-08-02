import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  ventanaEmergente(mensaje:string){
    alert(mensaje);
  }
}

/**
 * Un servicio util seria aquel que conecta con una base de datos
 */