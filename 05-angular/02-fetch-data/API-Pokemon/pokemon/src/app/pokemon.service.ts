import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemon(pokeId: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pokeId}/`
    );
    // console.log(bulbasaur);
    // bulbasaur.subscribe((data: Pokemon) => {
    //   console.log('data stuff', data.abilities);
    //   console.log(data);
    // });
  }
}

interface Pokemon {
  name: string;
  weight: number;
  abilities: Ability[];
}
interface Ability {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}
