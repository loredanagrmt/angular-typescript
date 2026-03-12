import { Component, inject, signal } from '@angular/core';
import { GifsList } from '../../components/gifs-list/gifs-list';
import { GifService } from '../../service/gifs.service';
import { Gif } from '../../interface/gif.inteface';

@Component({
  selector: 'app-search-page',
  imports: [GifsList],
  templateUrl: './search-page.html',
})
export default class SearchPage {

  gifService = inject(GifService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifService.searchGifs(query).subscribe((resp) => {
      this.gifs.set(resp)
    })
  }

}
