import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter-page.component';
import { HeroPagesComponent } from './pages/hero/hero-page.component';
import { Component } from '@angular/core';
export const routes: Routes = [

{
  path: ``,
  component: CounterPageComponent,
},

{
    path: 'hero',
    component: HeroPagesComponent,

  }

];
