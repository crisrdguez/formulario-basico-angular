import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo-component',
  templateUrl: './empleado-hijo-component.component.html',
  styleUrls: ['./empleado-hijo-component.component.css']
})
export class EmpleadoHijoComponentComponent implements OnInit{
  //le indicamos al componente hijo que va a recibir un dato
  @Input() empleadoIdentificativo:Empleado; //habria que inicializarlo al ser estricto, pero puedo cambiar el proyecto modificando tsconfig.json y añadiendo: "strictPropertyInitialization": false,
  @Input() iIdentificativo:number; 

  arrayCaracteristicas = [''];

  addCaracterisitca(newCaracteristica: string) {
    this.arrayCaracteristicas.push(newCaracteristica);
  }
  constructor(){}

  ngOnInit():void{
  }
}
