import { ChangeDetectionStrategy, Component, input, output, signal } from '@angular/core';
import { Contacto } from '../../../interfaces/contacto.interface';

@Component({
  selector: 'contacto-contacto-modificar',
  imports: [],
  templateUrl: './contacto-modificar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class ContactoModificarComponent {

  contactos = input<Contacto[]>([]);

  name = signal('')
  phone = signal(0)
  email = signal('')

  newContacto = output<Contacto>()

  addContacto() {
    if (!this.name() || !this.phone() || this.phone() <= 0 || !this.email()) {
      return;
    }

    const newContacto: Contacto = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      phone: this.phone(),
      email: this.email(),
    };

    /* this.Contactos.update((list)=> [... list, newContacto]); */
    this.newContacto.emit(newContacto)
    this.resetFields();

  }

  resetFields() {
    this.name.set(''),
      this.phone.set(0),
      this.email.set('')
  }

}
