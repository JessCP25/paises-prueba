import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pais } from '../../../interfaces/paises.interface';
import { ThisReceiver } from '@angular/compiler';

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
  @Output() show = new EventEmitter<boolean>();

  closeDetalle(){
    this.show.emit(false)
  }
}
