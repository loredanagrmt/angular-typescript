import { NgClass } from "@angular/common";
import { Component, computed, inject, signal } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { ContactoListComponent } from "../../components/contacto/contacto-list.component/contacto-list.component";
import { ContactoService } from "../../services/contacto.service";

import { ContactoAddComponent } from "../../components/contacto/contacto-add.component/contacto-add.component";

@Component({
  templateUrl: './listadoContacto-page.component.html',
  selector: 'listarContacto-page',
  imports: [ContactoListComponent],
})


export class listadoContactoPageComponent {

  public ContactoService= inject(ContactoService)

}
