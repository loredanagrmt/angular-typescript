import { Component, input } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';

@Component({
  selector: 'gifs-list',
  imports: [GifListItem],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  gifs = input.required<string[]>();
}
