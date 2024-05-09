import { Component, inject } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './formulario-editar.component.html',
  styleUrl: './formulario-editar.component.css'
})
export class FormularioEditarComponent {
  
  id: any;
  marca: any;
  color: any;
  precio: any;

  servicio = inject(AutosService)
  
editar(datos: any){
    this.servicio.putAutos(datos.value).subscribe()

    window.location.href = "gestion"

  }

  

}
