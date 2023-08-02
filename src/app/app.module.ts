import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponentComponent } from './empleado-hijo-component/empleado-hijo-component.component';
import { CaracteristicasEmpleadoComponentComponent } from './caracteristicas-empleado-component/caracteristicas-empleado-component.component';
import { ServicioEmpleadosDosService } from './servicio-empleados-dos.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponentComponent,
    CaracteristicasEmpleadoComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ServicioEmpleadosDosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
