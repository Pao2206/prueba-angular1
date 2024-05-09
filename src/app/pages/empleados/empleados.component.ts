import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EmpleadosService } from '../../services/empleados.service';

@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  servicio = inject(EmpleadosService)
  items: any
  empleado: any
  ngOnInit(): void {
    this.servicio.getEmpleados().subscribe((data) => {
      this.items = data;
      this.empleado = data.results;
    });
  }
}
