import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosDosService } from './servicio-empleados-dos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'Listado de Empleados';
  nombre:string="";
  apellidos:string="";
  cargo:string="";
  salario:number=0;

  empleados:Empleado[]=[];

  constructor(private empleadosService:ServicioEmpleadosDosService) {
    
    //this.empleados=this.empleadosService.empleados; podriamos hacerlo asi, pero tb con ngOnInit
  
  }

  enviarInformacion(){
    const empleadoNuevo = new Empleado(this.nombre,this.apellidos,this.cargo,this.salario);

    //llamo al metodo que agrega empleados
    this.empleadosService.agregarEmpleadoServicio(empleadoNuevo);

    this.resetInfo();
  }

  resetInfo(){
    this.nombre="";
    this.apellidos="";
    this.cargo="";
    this.salario=0;
  }

  ngOnInit():void{
    console.log("ngOnInit");
    this.empleados=this.empleadosService.empleados;

  }

   

}
