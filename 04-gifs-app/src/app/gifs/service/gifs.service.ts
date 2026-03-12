import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environment/environment';
import { KlipyResponse } from '../interface/klipy.interfaces';
import { Gif } from '../interface/gif.inteface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const GIF_KEY='gifs'

const loadFromLocalStorage = () => {

  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';  // Record<string, gifs[]>
  const gifs = JSON.parse(gifsFromLocalStorage);
  console.log(gifs);
  return  gifs;

}


@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([])
  trendingGifsLoading = signal(true)

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage())
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()))

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString)
  })
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

  searchGifs(query: string) {
    return this.http.get<KlipyResponse>(`${environment.klipyUrl}/Q1rDTzK4SIGNRrLXW8xfRgZiBvjDqAy6Vveg1AFUumeYor4QcDukeaM74Fl6YZhR/gifs/search`, {
      params: {
        api_key: environment.klipyKey,
        limit: 20,
        q: query,
      }
    })
      .pipe(
        map(({ data }) => data.data),
        map((items) => GifMapper.mapKlipyItemsToGifArray(items)),

        //TODO: historial

        tap(items => {
          this.searchHistory.update(history => ({
            ...history,
            [query.toLowerCase()]: items,
          }))
        })

      );
    /* .subscribe((resp) => {

      const gifs = GifMapper.mapKlipyItemsToGifArray(resp.data.data);

      console.log({ search: gifs });
      return gifs;

    }); */

  }

  getHistoryGifs(query: string) {
    return this.searchHistory()[query] ?? [];
  }

}
