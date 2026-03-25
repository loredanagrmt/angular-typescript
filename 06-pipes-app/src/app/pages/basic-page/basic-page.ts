import { LowerCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe],
  templateUrl: './basic-page.html',
})
export default class BasicPage {

nameLower= signal('loredana')
  nameUpper = signal('LOREDANA')
  fullname = signal('lORedAnA')


 }
