import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TablaComponent } from '../../components/tabla/tabla.component';

@Component({
  selector: 'app-gestion',
  standalone: true,
  imports: [RouterLink, TablaComponent],
  templateUrl: './gestion.component.html',
  styleUrl: './gestion.component.css'
})
export class GestionComponent {

}
