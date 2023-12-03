import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Country, Pais } from '../../../interfaces/paises.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PaisesService } from '../../../services/paises.service';
import { DetallePaisComponent } from '../detalle-pais/detalle-pais.component';

@Component({
  selector: 'paises-item',
  standalone: true,
  imports: [
    CommonModule,
    DetallePaisComponent
  ],
  templateUrl: './item-paises.component.html',
  styleUrl: './item-paises.component.css',
})
export class ItemPaisesComponent {
  @Input() pais!: Country;
  showDetalle = false;
  paisItem!: Pais;

  constructor(
    private paisesService: PaisesService
  ){
  }

  toogleDetalle(){
    this.showDetalle= !this.showDetalle;
  }

  mostrarPais(code: string){
    this.paisesService.getPais(code)
    .subscribe(result=>{
      this.paisItem = result[0];
      console.log(result);
    })
    this.toogleDetalle();
  }
}
