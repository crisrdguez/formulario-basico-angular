import { Component, OnInit } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

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

  constructor(private miServicio:ServicioEmpleadosService) { //con esto, acabamos de inyectar en el componente principal el servicio que hemos creado

    const empleado1 = new Empleado("Cris", "RR", "jefa", 5000);
    const empleado2 = new Empleado("Fran", "FG", "secretario", 3000);
    const empleado3 = new Empleado("Juan", "MN", "administrativo", 2000);

    this.empleados.push(empleado1, empleado2, empleado3);
  }

  enviarInformacion(){
    const empleadoNuevo = new Empleado(this.nombre,this.apellidos,this.cargo,this.salario);

    //antes de que se agregue el empleado a la lista hago uso del servicio
    this.miServicio.ventanaEmergente(`Nombre ${empleadoNuevo.nombre}`);//Puedo añadir la informacion que desee
    
    this.empleados.push(empleadoNuevo);

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
  }

   

}
