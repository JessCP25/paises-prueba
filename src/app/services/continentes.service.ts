import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { forkJoin, map, mergeMap } from 'rxjs';
import { ImagenesService } from './imagenes.service';
import { Continentes } from '../interfaces/continentes.interface';

@Injectable({
  providedIn: 'root'
})
export class ContinentesService {

  constructor(
    private apollo: Apollo,
    private imageService: ImagenesService
  ) { }

  getContinentes(){
    return this.apollo.query<Continentes>({
      query: gql`
      query {
        continents{
          code,
          name
        }
      }`
    }).pipe(
      mergeMap(result => {
        const continentes = result.data.continents.map(continente=>{
          return this.imageService.searchImage(continente.name)
          .pipe(
            map(resultImagen=>{
              return {...continente, imagen: resultImagen.hits[0]?.webformatURL || ''}
            })
          );
        });
        console.log(continentes)
        return forkJoin(continentes);
      })
    )
  }

}
