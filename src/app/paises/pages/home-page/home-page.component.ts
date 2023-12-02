import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BuscadorComponent } from '../../../shared/buscador/buscador.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    BuscadorComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export default class HomePageComponent { }
