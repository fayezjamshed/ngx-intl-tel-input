import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countryFilter'
})
export class CountryFilterPipe implements PipeTransform {

  transform(countries: any[], searchTerm: string): any[] {
    if (!countries || !searchTerm) {
      return countries;
    }

    searchTerm = searchTerm.toLowerCase();

    return countries.filter(country =>
      country.name.toLowerCase().includes(searchTerm) ||
      country.dialCode.toLowerCase().includes(searchTerm.replace('+','')) 
    );
  }

}
