import { Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragoball-character-list',
  templateUrl: './character-list.component.html',
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
}
