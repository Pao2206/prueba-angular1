import { Component, inject } from '@angular/core';
import { AutosService } from '../../services/autos.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

 servicio = inject(AutosService)
  autos: any 

  ngOnInit() {
    this.servicio.getAutos().subscribe(a =>{
      this.autos = a
    })
  }

}