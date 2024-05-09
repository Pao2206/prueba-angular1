import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutosService } from '../../services/autos.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent {

  servicio = inject(AutosService)
  autos: any 

  ngOnInit() {
    this.servicio.getAutos().subscribe(a =>{
      this.autos = a
    })
  }

  eliminar(id: any){
    this.servicio.deleteAutoID(id).subscribe()
  }

  filtro = 0;
  id: any
  filtroAutos = inject(AutosService);

  runFiltro(id: string) {
    console.log('Filtro se aplicó');
    this.servicio.getAutos().subscribe(autos => {
      this.filtroAutos = autos.filter(
        (auto: any) => auto.id === id
      );
    });
  }
}
