import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Pais } from '../../../interfaces/paises.interface';

@Component({
  selector: 'detalle-pais',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css',
})
export class DetallePaisComponent {
  @Input() paisItem!: Pais;
}
