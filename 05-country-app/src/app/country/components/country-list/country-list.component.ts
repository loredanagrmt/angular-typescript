import { Component, input } from '@angular/core';
import { RESTCountry } from '../../interfaces/rest-contries.interface';

@Component({
  selector: 'country-list',
  standalone:true,
  imports: [],
  templateUrl: './country-list.component.html',
})
export class CountryListComponent {

  countries=input.required<RESTCountry[]>();

}
