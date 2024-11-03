import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({ providedIn: 'root' })
export class DbzService {
  constructor() { }
  public characters: Character[] = [
    {
      id: uuid(),
      name: "Krillin",
      power: 1000
    },
    {
      id: uuid(),
      name: "Goku",
      power: 9500
    },
    {
      id: uuid(),
      name: "Vegeta",
      power: 8000
    }]

  public addCharacter(character: Character): void {
    this.characters.push({ ...character, id: uuid() });
  }
  public deleteCharacter(id: string): void {
    // this.characters.splice(index, 1);
    this.characters =this.characters.filter(character=>character.id!==id);
  }
}
