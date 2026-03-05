import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPagesComponent } from './pages/modificar/hero-page.component';
import { Component } from '@angular/core';
import { DragonballPageComponent } from './pages/listado/dragonball-page.component';
import { DragonballSuperPageComponent } from './pages/nuevo/dragonball-super-page.component';
export const routes: Routes = [

{
  path: ``,
  component: CounterPageComponent,
},


{
    path: 'dragonball',
    component: DragonballPageComponent,

  },

{
    path: 'hero',
    component: HeroPagesComponent,

  },

  {
    path: 'dragonball-super',
    component: DragonballSuperPageComponent,
  }

];
