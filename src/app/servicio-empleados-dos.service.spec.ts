import { TestBed } from '@angular/core/testing';

import { ServicioEmpleadosDosService } from './servicio-empleados-dos.service';

describe('ServicioEmpleadosDosService', () => {
  let service: ServicioEmpleadosDosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioEmpleadosDosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
