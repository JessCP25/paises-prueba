import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { forkJoin, map, mergeMap } from 'rxjs';
import { DataCountries} from '../interfaces/paises.interface';
import { ImagenesService } from './imagenes.service';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(
    private apollo: Apollo,
    private imageService: ImagenesService
  ) { }

  getPaises(){
    return this.apollo.query<DataCountries>({
      query: gql`
      query {
        countries {
          name,
          emoji,
          continent{
            name
          }
        }
      }`
    }).pipe(
      mergeMap(result => {
        const paises = result.data.countries.map(pais=>{
          return this.imageService.searchImage(pais.name)
          .pipe(
            map(resultImagen=>{
              return {...pais, imagen: resultImagen.hits[0]?.webformatURL || ''}
            })
          );
        });
        console.log(paises)
        return forkJoin(paises);
      })
    )
  }

  getPaisesByContinente(continente: string){
    return this.apollo.query<DataCountries>({
      query: gql`
      query GetCountriesByContinent($continentName: String!) {
        countries(filter: { continent: { eq: $continentName}}) {
          name,
          emoji,
          continent{
            name
          }
        }
      }`,
      variables: {
        continentName: continente
      }
    }).pipe(
      mergeMap(result => {
        const paises = result.data.countries.map(pais=>{
          return this.imageService.searchImage(pais.name)
          .pipe(
            map(resultImagen=>{
              return {...pais, imagen: resultImagen.hits[0]?.webformatURL || ''}
            })
          );
        });
        console.log(paises)
        return forkJoin(paises);
      })
    )
  }
}
