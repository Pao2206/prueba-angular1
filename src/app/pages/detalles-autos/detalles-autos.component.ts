import { Component, inject } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalles-autos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalles-autos.component.html',
  styleUrl: './detalles-autos.component.css'
})
export class DetallesAutosComponent {

  servicios = inject(AutosService)
  ruta = inject(ActivatedRoute)

  id: any
  auto: any

  ngOnInit(){
   this.ruta.params.subscribe(a =>{
     this.id = a['idAuto']
     this.servicios.getAutoUnico(this.id).subscribe(autos =>{
       this.auto = autos
     })
   })
  }
}
