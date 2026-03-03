import { Component, input } from '@angular/core';
import type { Contacto } from '../../../interfaces/contacto.interface';

@Component({
  selector: 'contacto-contacto-list',
  templateUrl: './contacto-list.component.html',
})
export class ContactoListComponent {
  contactos = input.required<Contacto[]>();
  listName=input.required<string>();
}
