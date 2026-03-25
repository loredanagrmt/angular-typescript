import {Component } from '@angular/core';
import { reactiveRoutes } from '../../../reactive/reactive.routes';

interface MenuItem{
  title: string;
  route: string;
}

const reactiveRoute= reactiveRoutes[0].children ?? []; 

@Component({
  selector: 'app-side-menu',
  imports: [],
  templateUrl: './side-menu.html',
})
export class SideMenu { }
