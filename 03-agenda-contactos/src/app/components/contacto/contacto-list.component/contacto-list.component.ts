import { Component, input } from '@angular/core';
import type { Contacto } from '../../../interfaces/contacto.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'contacto-contacto-list',
  templateUrl: './contacto-list.component.html',
  imports:[RouterLink]
})
export class ContactoListComponent {
  contactos = input.required<Contacto[]>();
  listName=input.required<string>();
}
