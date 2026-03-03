import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { Contacto } from '../../../interfaces/contacto.interface';

@Component({
  selector: 'contacto-contacto-add',
  imports: [],
  templateUrl: './contacto-add.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ContactoAddComponent {
  name = signal('Nombre')
  power = signal(0)

  newContacto = output<Contacto>()

  addContacto() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newContacto: Contacto = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    };

    /* this.Contactos.update((list)=> [... list, newContacto]); */
    this.newContacto.emit(newContacto)
    this.resetFields();

  }

  resetFields() {
    this.name.set(''),
    this.power.set(0)
  }

}
