import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '@environment/environment';
/* import { environment } from '../../../../environments/environment'; */

@Component({
  selector: 'app-gifs-side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
})
export class GifsSideMenuHeader {

  envs= environment

}
