import { UpperCasePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";

@Component({
  templateUrl: `./modificarContacto-page.component.html`,
  imports:[UpperCasePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ModificarPagesComponent {

  nameSignal = signal('Ironman');
  ageSignal = signal(45);

  heroDescriprion= computed(()=>{
      const description=`${this.nameSignal()} - ${this.ageSignal()}`;
      return description;
  })

  capitalizedName= computed(() => this.nameSignal().toUpperCase())

  changeHero() {
    this.nameSignal.update((v = 'Ironman') => v = 'Spiderman');
    this.ageSignal.update((v) => v = 22);
  }

  resetForm() {
    this.nameSignal.update((v = 'Spiderman') => v = 'Iroman');
    this.ageSignal.update((v) => v = 45);
  }

  chageAge() {
    this.nameSignal.set('Iroman')
    this.ageSignal.set(60);
  }

}
