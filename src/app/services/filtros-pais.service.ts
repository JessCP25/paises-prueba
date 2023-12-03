import { Continent } from './../interfaces/paises.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltrosPaisService {

  private _filtrosPais = new BehaviorSubject({});

  get filtrosPais(){
    return this._filtrosPais;
  }

  private _nombre: string | undefined;
  private _continente: string[] = [];

  get nombre(): string | undefined {
    return this._nombre;
  }
  set nombre(value: string | undefined) {
    this._nombre = value;
  }

  get continente(): string[]{
    return this._continente;
  }
  set continente(value: string) {
    this._continente.push(value);
  }


  constructor() {
    this.updateFiltros();
  }

  updateFiltros(){
    const filtros = {
      ...(this.nombre !== undefined && {nombre: this.nombre}),
      ...(this.continente!== undefined && {continente: this.continente})
    };
    Object.keys(filtros).length > 0
    ? this._filtrosPais.next(filtros)
    : this._filtrosPais.next({});
  }

  resetFiltro(){
    this._continente = [];
    this.updateFiltros()
  }

}
