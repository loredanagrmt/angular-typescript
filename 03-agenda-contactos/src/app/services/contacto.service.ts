import { effect, Injectable, signal } from '@angular/core';
import { Contacto } from '../interfaces/contacto.interface';

const loadFromLocalStorage = (): Contacto[] => {

  const contactos = localStorage.getItem('contactos');

  return contactos ? JSON.parse(contactos) : [];
}

@Injectable({ providedIn: 'root' })
export class ContactoService {

  contactos = signal<Contacto[]>(loadFromLocalStorage());

  saveToLocalStorage = effect(() => {
    /* console.log(`Contacto count ${this.contactos().length}`);  */
    localStorage.setItem('contactos', JSON.stringify(this.contactos()))
  })

  addContacto(contacto: Contacto) {
    this.contactos.update(
      list => [...list, contacto]
    )
  }

}
