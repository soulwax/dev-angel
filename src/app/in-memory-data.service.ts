import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 0, name: 'Lazarus "Cap Hunter" Wright', age: 26 },
      { id: 1, name: 'Mr. Aieth Yeti', age: 34 },
      { id: 2, name: 'Beam', age:  36},
      { id: 3, name: 'Iavel Aranea ', age:  38},
      { id: 4, name: 'John\'s Defender', age: 27},
      { id: 5, name: 'Walther von Brügge', age: 32 }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
