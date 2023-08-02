import { Component, EventEmitter, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caracteristicas-empleado-component',
  templateUrl: './caracteristicas-empleado-component.component.html',
  styleUrls: ['./caracteristicas-empleado-component.component.css']
})
export class CaracteristicasEmpleadoComponentComponent {

  constructor(private miServicio:ServicioEmpleadosService){

  }

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  enviarCaracteristicasAlPadre(value:string){
    this.miServicio.ventanaEmergente(`Caracteristica: ${value}`);//Puedo añadir la informacion que desee
    this.caracteristicasEmpleados.emit(value);
}

}
