import { Component, computed, inject, signal } from "@angular/core";
import { ContactoListComponent } from "../../components/contacto/contacto-list.component/contacto-list.component";
import { ContactoAddComponent } from "../../components/contacto/contacto-add.component/contacto-add.component";
import { Contacto } from "../../interfaces/contacto.interface";
import { ContactoService } from '../../services/contacto.service';


@Component({
  templateUrl: './nuevoContacto-super-page.component.html',
  selector: 'nuevoContacto-super',
  imports: [ContactoAddComponent]
})


export class NuevoSuperPageComponent {

  public ContactoService= inject(ContactoService)

}
