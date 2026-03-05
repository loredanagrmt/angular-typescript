import { Component, computed, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list.component/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add.component/character-add.component";
import { Character } from "../../interfaces/character.interface";
import { DragonballService } from '../../services/dragonball.service';


@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent]
})


export class DragonballSuperPageComponent {

  public DragonballService= inject(DragonballService)

}
