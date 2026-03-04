import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactoService } from '../../services/contacto.service';
import { Contacto } from '../../interfaces/contacto.interface';
/*
@Component({
  templateUrl: './modificarContacto-page.component.html',
})
export class ModificarPagesComponent {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private contactoService = inject(ContactoService);

  contacto = signal<Contacto | null>(null);

  constructor() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const found = this.contactoService.contactos().find(c => c.id === id) ?? null;
    this.contacto.set(found);
  }

  confirmar() {
    const c = this.contacto();
    if (!c) return;

    this.contactoService.updateContacto(c);
    this.router.navigateByUrl('');
  }
}
 */
