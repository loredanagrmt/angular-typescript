import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GifsSideMenuHeader } from "../side-menu-header/side-menu-header";
import { GifsSideMenuOptions } from "../side-menu-options/side-menu-options";

@Component({
  selector: 'gifs-side-menu',
  imports: [GifsSideMenuHeader, GifsSideMenuOptions],
  templateUrl: './gifs-side-menu.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GifsSideMenu { }
