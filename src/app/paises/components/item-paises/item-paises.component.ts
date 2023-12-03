import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Country } from '../../../interfaces/paises.interface';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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

  @Input() pais!: Country;

  constructor(private sanitizer: DomSanitizer){}

  emojiRender(emoji: string): SafeHtml{
    const item = `<span>${emoji}</span>`;
    return this.sanitizer.bypassSecurityTrustHtml(item);
  }
}
