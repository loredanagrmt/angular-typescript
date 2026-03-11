import { Component, input } from '@angular/core';
import { GifListItem } from './gif-list-item/gif-list-item';
import { Gif } from '../../interface/gif.inteface';

@Component({
  selector: 'gifs-list',
  imports: [GifListItem],
  templateUrl: './gifs-list.html',
})
export class GifsList {
  gifs = input.required<Gif[]>();
}
