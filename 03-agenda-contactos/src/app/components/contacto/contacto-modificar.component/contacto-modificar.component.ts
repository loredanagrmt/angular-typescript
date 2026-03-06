import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contacto } from '../../../interfaces/contacto.interface';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'contacto-contacto-modificar',
  templateUrl: './contacto-modificar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactoModificarComponent {

  idModi = signal(0);
  nombreModi = signal('');
  phoneModi = signal(0);
  emailModi = signal('');

  constructor(
    private route: ActivatedRoute,
    private contactoService: ContactoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id')); // 👈 id de la URL

    const contacto = this.contactoService.contactos().find((c: Contacto) => c.id === id);

    if (contacto) {
      this.idModi.set(contacto.id);
      this.nombreModi.set(contacto.name);
      this.phoneModi.set(contacto.phone);
      this.emailModi.set(contacto.email);
    }
  }
}
