import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { KlipyResponse } from '../interface/klipy.interfaces';

@Injectable({providedIn: 'root'})
export class GifService {

  private http = inject(HttpClient);

  constructor(){
    this.loadTrendingGifs();
  }

loadTrendingGifs(){

  this.http.get<KlipyResponse>(`${environment.klipyUrl }/Q1rDTzK4SIGNRrLXW8xfRgZiBvjDqAy6Vveg1AFUumeYor4QcDukeaM74Fl6YZhR/gifs/trending`, {
    params:{
      api_key:environment.klipyKey,
      limit:20,
    }
  }).subscribe((resp) => {
    console.log({resp});
  });

}

}
