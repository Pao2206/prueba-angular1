import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AutosService } from '../../services/autos.service';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [RouterLink],
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

}
