import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from '../../../interfaces/contacto.interface';
import { ContactoService } from '../../../services/contacto.service';
import { emailError } from '@angular/forms/signals';

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

  guardadoOk = signal(false);
  errorMsg = signal('');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactoService: ContactoService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const contacto = this.contactoService.buscarContacto(id);

    if (contacto) {
      this.idModi.set(contacto.id);
      this.nombreModi.set(contacto.name);
      this.phoneModi.set(contacto.phone);
      this.emailModi.set(contacto.email);
    }
  }

  guardarCambios() {
    if (!this.nombreModi || this.phoneModi()==0 || !this.emailModi) {
      const emailError = document.getElementById('emailError') as HTMLElement;
      emailError.style.display = 'block';
      emailError.textContent = 'Complete todos los datos antes de guardar';

      setTimeout(() => {
        emailError.style.display = 'none';
      }, 3000);
      return;
    }

    const contactoActualizado: Contacto = {
      id: this.idModi(),
      name: this.nombreModi().trim(),
      phone: this.phoneModi(),
      email: this.emailModi().trim(),

    };

    const datosAcualizados = document.getElementById('datosAcualizados') as HTMLElement;
    datosAcualizados.style.display = 'block';
    datosAcualizados.textContent = ' El contacto ha sido actualizado correctamente';

      setTimeout(() => {
        datosAcualizados.style.display = 'none';
      }, 6000);


    this.contactoService.modificarContacto(contactoActualizado);
    this.router.navigateByUrl('/');
    this.guardadoOk.set(true);


  }
}
