import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BuscadorComponent } from '../../../shared/components/buscador/buscador.component';
import { ItemPaisesComponent } from '../../components/item-paises/item-paises.component';
import { PaisesService } from '../../../services/paises.service';
import { Country, Pais } from '../../../interfaces/paises.interface';
import { Continente } from '../../../interfaces/continentes.interface';
import { ContinentesService } from '../../../services/continentes.service';
import { FiltrosPaisService } from '../../../services/filtros-pais.service';
import { DetallePaisComponent } from '../../components/detalle-pais/detalle-pais.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    BuscadorComponent,
    ItemPaisesComponent,
    DetallePaisComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent implements OnInit {
  paises: Country[] = [];
  continentes: Continente[] = [];
  paisItem!: Pais;

  constructor(
    private paisesService: PaisesService,
    private continentesService: ContinentesService,
    private filtrosPais: FiltrosPaisService
  ) {}

  ngOnInit(): void {
    // this.imagenes.searchImage('gato').subscribe(result=>{
    //   this.images = result;
    // })
    this.getContinentes();
    if (this.filtrosPais.continente.length === 0) {
      this.getPaises(this.filtrosPais.nombre || "");
    } else {
      this.buscarContinente(this.filtrosPais.continente || []);
    }
  }

  getPaises(term: string) {
    this.paisesService.getPaises(term).subscribe((result) => {
      if (result) {
        this.paises = result;
        console.log(result);
      }
    });
  }

  getContinentes() {
    this.continentesService.getContinentes().subscribe((result) => {
      this.continentes = result;
    });
  }

  buscarPais(term: string) {
    this.filtrosPais.nombre = term;
    if (this.filtrosPais.continente.length === 0) {
      this.getPaises(term);
    } else {
      this.buscarContinente(this.filtrosPais.continente);
    }
  }

  buscarContinente(code: string[]) {
    this.paisesService
      .getPaisesByContinente(this.filtrosPais.nombre || "", code)
      .subscribe((result) => {
        this.paises = result;
        console.log(result);
      });
  }
}
