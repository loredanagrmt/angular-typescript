import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { CharacterListComponent } from "../../components/dragonball/character-list.component/character-list.component";

interface Character {
  id: number,
  name: string,
  power: number,
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent]
})


export class DragonballSuperPageComponent {

  name = signal('Nombre')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 9000 },
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list)=> [... list, newCharacter]);
    this.resetFields();

  }

  resetFields(){
    this.name.set(''),
    this.power.set(0)
  }

}
