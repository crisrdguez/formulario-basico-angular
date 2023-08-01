import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Listado de Empleados';
  nombre:string="";
  apellidos:string="";
  cargo:string="";
  salario:number=0;

  empleados:Empleado[]=[];

  constructor() {
    const empleado1 = new Empleado("Cris", "RR", "jefa", 5000);
    const empleado2 = new Empleado("Fran", "FG", "secretario", 3000);
    const empleado3 = new Empleado("Juan", "MN", "administrativo", 2000);

    this.empleados.push(empleado1, empleado2, empleado3);
  }

  enviarInformacion(){
    const empleadoNuevo = new Empleado(this.nombre,this.apellidos,this.cargo,this.salario);

    this.empleados.push(empleadoNuevo);

    this.resetInfo();
  }

  resetInfo(){
    this.nombre="";
    this.apellidos="";
    this.cargo="";
    this.salario=0;
  }
  

}
