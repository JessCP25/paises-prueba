import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Imagen } from '../interfaces/images.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {

  constructor( private http: HttpClient) { }

  urlBase = 'https://pixabay.com/api/';
  key = '41037390-fa082abba11ab88080452aff8';

  searchImage(q: string){
    const params = new HttpParams()
      .set('key', this.key)
      .set('q', q)
      .set('image_type', 'photo')
      .set('per_page', 3);

    return this.http.get<Imagen>(this.urlBase, { params });
  }
}
