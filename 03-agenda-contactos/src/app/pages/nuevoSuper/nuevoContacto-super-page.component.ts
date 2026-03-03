import { Component, computed, inject, signal } from "@angular/core";
import { ContactoListComponent } from "../../components/contacto/contacto-list.component/contacto-list.component";
import { ContactoAddComponent } from "../../components/contacto/contacto-add.component/contacto-add.component";
import { Contacto } from "../../interfaces/contacto.interface";
import { DragonballService } from '../../services/contacto.service';


@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [ContactoListComponent, ContactoAddComponent]
})


export class DragonballSuperPageComponent {

  public DragonballService= inject(DragonballService)

}
