import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-component',
  templateUrl: './caracteristicas-empleado-component.component.html',
  styleUrls: ['./caracteristicas-empleado-component.component.css']
})
export class CaracteristicasEmpleadoComponentComponent {

  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  enviarCaracteristicasAlPadre(value:string){
    this.caracteristicasEmpleados.emit(value);
}

}
