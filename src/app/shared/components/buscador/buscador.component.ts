import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Continente } from '../../../interfaces/continentes.interface';
import { Subject, debounceTime } from 'rxjs';
import { FiltrosPaisService } from '../../../services/filtros-pais.service';

@Component({
  selector: 'shared-buscador',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css',
})
export class BuscadorComponent implements OnInit {
  @Input() continentes: Continente[] = [];
  @Output() onSearch = new EventEmitter<string>();
  @Output() onSearchContinente = new EventEmitter<string[]>();
  continentesBuscar: string[] = [];

  showContinentes: boolean = false;

  private debouncer: Subject<string> = new Subject<string>();

  constructor(private filtrosPais: FiltrosPaisService) {}

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(500))
      .subscribe((valor) => this.onSearch.emit(valor));
  }

  ngOnDestroy(): void {
    this.debouncer.unsubscribe();
  }

  onKeyPress(term: string) {
    this.debouncer.next(term);
  }

  show() {
    this.showContinentes = !this.showContinentes;
  }

  buscarContinente(code: string) {
    this.filtrosPais.continente = code;
    this.continentesBuscar.push(code);
    this.onSearchContinente.emit(this.continentesBuscar);
  }

  resetFiltro() {
    this.filtrosPais.resetFiltro();
    this.onKeyPress(this.filtrosPais.nombre || '');
    this.show();
  }
}
