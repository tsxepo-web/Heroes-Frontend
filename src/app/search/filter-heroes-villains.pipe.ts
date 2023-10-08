import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterHeroesVillains'
})
export class FilterHeroesVillainsPipe implements PipeTransform {

  transform(items: any[], searchQuery: string): any[] {
    if (!items || !searchQuery) {
      return items;
    }
    searchQuery = searchQuery.toLocaleLowerCase();

    return items.filter(item => {
      return item.name.toLocaleLowerCase().includes(searchQuery);
    });
  }
}
