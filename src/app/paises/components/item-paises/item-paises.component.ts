import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country, Pais } from '../../../interfaces/paises.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PaisesService } from '../../../services/paises.service';

@Component({
  selector: 'paises-item',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './item-paises.component.html',
  styleUrl: './item-paises.component.css',
})
export class ItemPaisesComponent {
  @Output() paisItem  = new EventEmitter<string>();
  @Input() pais!: Country;

  constructor(
    private paisesService: PaisesService
  ){}

  mostrarPais(code: string){
    this.paisItem.emit(code);
  }
}
