import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environment/environment';
import { KlipyResponse } from '../interface/klipy.interfaces';
import { Gif } from '../interface/gif.inteface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);
  return gifs;
};

@Injectable({ providedIn: 'root' })
export class GifService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(1);

  trendingGifGroup = computed<Gif[][]>(() => {
    const groups = [];
    for (let i = 0; i < this.trendingGifs().length; i += 3) {
      groups.push(this.trendingGifs().slice(i, i + 3));
    }

    return groups;
  });

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString);
  });

  loadTrendingGifs() {

    if (this.trendingGifsLoading()) return;

    this.trendingGifsLoading.set(true);

    this.http.get<KlipyResponse>(`${environment.klipyUrl}/Q1rDTzK4SIGNRrLXW8xfRgZiBvjDqAy6Vveg1AFUumeYor4QcDukeaM74Fl6YZhR/gifs/trending`, {
      params: {
        page: this.trendingPage(),
        per_page: 20
      }
    }).subscribe((resp) => {

      const gifs = GifMapper.mapKlipyItemsToGifArray(resp.data.data);

      this.trendingGifs.update(currentGifs => [
        ...currentGifs,
        ...gifs
      ]);

      this.trendingPage.update((page) => page + 1);
      this.trendingGifsLoading.set(false);

    }, () => {
      this.trendingGifsLoading.set(false);
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
        tap(items => {
          this.searchHistory.update(history => ({
            ...history,
            [query.toLowerCase()]: items,
          }));
        })
      );
  }

  getHistoryGifs(query: string) {
    return this.searchHistory()[query] ?? [];
  }

}
