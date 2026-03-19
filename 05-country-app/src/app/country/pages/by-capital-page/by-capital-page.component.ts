import { Component, inject, resource, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { firstValueFrom, of } from 'rxjs';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryService } from '../../services/contry.service';


@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
})
export class ByCapitalPageComponent {

  countryService = inject(CountryService)
  query = signal('')

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
            if (!this.query()) return of([]);

      return this.countryService.searchByCapital(request.query)

    }
  })

  /*  isLoading = signal(false)
   isError = signal<string | null>(null)
   countries = signal<Country[]>([])

   onSearch(query: string) {
     if (this.isLoading()) return;

     this.isLoading.set(true)
     this.isError.set(null)

     this.countryService.searchByCapital(query).subscribe({

       next: (countries) => {
         this.isLoading.set(true);
         this.countries.set(countries)
       },
       error:(err)=>{
         console.log(err)
         this.isLoading.set(false)
         this.countries.set([])
         this.isError.set(`No se encontró un país con esa capital:  ${query}`)
       }
     })
   } */

}
