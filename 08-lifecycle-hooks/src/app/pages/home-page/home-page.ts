import { afterNextRender, Component, afterEveryRender, OnInit, OnChanges, effect, signal } from '@angular/core';
import { Title } from '../../components/title/title';

const log = (...messages: string[]) => {
  console.log(`${messages[0]} %c${messages.slice(1).join(', ')}`,
    'color: #bada55');
}

@Component({
  selector: 'app-home-page',
  imports: [Title],
  templateUrl: './home-page.html',
})
export class HomePage implements OnInit, OnChanges {

  traditionalProperty = 'Loredana'
  signalProperty= signal('Loredana')

  constructor() {
    log('Constructor llamado');

   /*  setTimeout(()=>{
     this.signalProperty.set('Juan Carlos');
     this.traditionalProperty= 'Pedro'
    }, 2000); */
  }

  changeTraditional(){
    this.traditionalProperty= 'Loredana Giaramita';
  }

  changeSignal() {
    this.signalProperty.set('Loredana Giaramita');
  }

  basicEffect = effect((onCleanup) => {
    log('effect', 'Disparar efectos sencundarios');
    onCleanup(() => {
      log('onCleanup', 'Se ejecuta cuando el efecto se va a destruir')
    })
  })

  ngOnInit() {
    log('ngOnInit', "Runs once after Angular has initialized all the component's inputs.")
  }
  ngOnChanges() {
    log('ngOnChanges', "Runs every time the component's inputs have changed.")
  }
  ngDoCheck() {
    log('ngDoCheck', "Runs every time this component is checked for changes.")
  }
  ngAfterContentInit() {
    log('ngAfterContentInit', "Runs once after the component's content has been initialized.")
  }
  ngAfterContentChecked() {
    log('ngAfterContentChecked', "Runs every time this component content has been checked for changes.")
  }
  ngAfterViewInit() {
    log('ngAfterViewInit', "Runs once after the component's view has been initialized.")
  }
  ngAfterViewChecked() {
    log('ngAfterViewChecked', "Runs every time the component's view has been checked for changes.")
  }

  ngOnDestroy() {
    log('ngOnDestroy', "Runs once before the component is destroyed.")
  }

  afterNextRenderEffect = afterNextRender(() => {
    log('afterNextRender', "Runs once the next time that all components have been rendered to the DOM.");
  });

  afterEveryRenderEffect = afterEveryRender(() => {
    log('afterRender', "Runs every time all components have been rendered to the DOM.");
  });

}
