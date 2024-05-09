import { Component, inject } from '@angular/core';
import { GaleriaComponent } from '../../components/galeria/galeria.component';
import { CommonModule } from '@angular/common';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-autos',
  standalone: true,
  imports: [GaleriaComponent, CommonModule],
  templateUrl: './autos.component.html',
  styleUrl: './autos.component.css'
})
export class AutosComponent {

  servicios = inject(AutosService)
  autos: any

  //////funcion que se ejecuta cuando se carga la pagina////////
  ngOnInit(){
    this.servicios.getAutos().subscribe( a => {
      this.autos = a
    } )
  }

}
