import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BuscadorComponent } from '../../../shared/buscador/buscador.component';
import { ItemPaisesComponent } from '../../components/item-paises/item-paises.component';
import { PaisesService } from '../../../services/paises.service';
import { Country } from '../../../interfaces/paises.interface';
import { ImagenesService } from '../../../services/imagenes.service';
import { Continente } from '../../../interfaces/continentes.interface';
import { ContinentesService } from '../../../services/continentes.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    BuscadorComponent,
    ItemPaisesComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent implements OnInit {
  paises: Country[] = [];
  images: any;
  paisesPrueba: Country[] = [];
  continentes: Continente[] = []

  constructor(
    private paisesService: PaisesService,
    private imagenes: ImagenesService,
    private continentesService: ContinentesService
  ){}

  ngOnInit(): void {
    this.getPaises();
    // this.imagenes.searchImage('gato').subscribe(result=>{
    //   this.images = result;
    // })
    this.getContinentes();
    this.paisesService.getPaisesByContinente('AS')
    .subscribe(result=>{
      this.paisesPrueba = result;
      console.log(result)
    })
  }

  getPaises(){
    this.paisesService.getPaises().subscribe(
      (result)=>{
        if(result){
          this.paises = result;
          console.log(result)
        }
      }
    )
  }

  getContinentes(){
    this.continentesService.getContinentes()
    .subscribe(result=>{
      this.continentes = result
    })
  }
}
