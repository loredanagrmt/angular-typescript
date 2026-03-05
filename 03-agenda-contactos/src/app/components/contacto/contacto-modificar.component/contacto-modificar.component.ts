import { ChangeDetectionStrategy, Component, inject, input, output, signal } from '@angular/core';
import { Contacto } from '../../../interfaces/contacto.interface';
import { ActivatedRoute } from '@angular/router';
import { ContactoService } from '../../../services/contacto.service';

@Component({
  selector: 'contacto-contacto-modificar',
  imports: [],
  templateUrl: './contacto-modificar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})

export class ContactoModificarComponent {

  constructor(private route: ActivatedRoute) {
    const id = this.route.snapshot.paramMap.get('id');
  }

  idModi = signal(0)
  nombreModi = signal('')
  phoneModi = signal(0)
  emailModi = signal('')

  public ContactoService = inject(ContactoService)

}


}
