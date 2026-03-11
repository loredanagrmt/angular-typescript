import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environment/environment';
import { KlipyResponse } from '../interface/klipy.interfaces';
import { Gif } from '../interface/gif.inteface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(true)

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {

    this.http.get<KlipyResponse>(`${environment.klipyUrl}/Q1rDTzK4SIGNRrLXW8xfRgZiBvjDqAy6Vveg1AFUumeYor4QcDukeaM74Fl6YZhR/gifs/trending`, {
      params: {
        api_key: environment.klipyKey,
        limit: 20,
      }
    }).subscribe((resp) => {

      const gifs = GifMapper.mapKlipyItemsToGifArray(resp.data.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false)
      console.log({ gifs })

    });

  }

}
