import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Continente } from '../../interfaces/continentes.interface';

@Component({
  selector: 'shared-buscador',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent {
  @Input() continentes: Continente[] = []
}
