import { Injectable } from '@angular/core';
import { Character } from '../models/character';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  charactersURL = "https://rickandmortyapi.com/api/character/";
  locationsURL = "https://rickandmortyapi.com/api/location";
  episodesURL = "https://rickandmortyapi.com/api/episode";

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<Character[]>{
    return this.http.get<any>(this.charactersURL).pipe(
      map(data => {
        const character = data.results;
        return character;
      })
    )
  }

  getCharactersByPage(page: number): Observable<Character[]>{
    return this.http.get<any>(this.charactersURL + '?page=' + page).pipe(
      map(data => {
        const character = data.results;
        return character;
      })
    )
  }

}
