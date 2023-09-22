import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Character } from 'src/app/models/character';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit {

  page: number = 1;
  characters: Character[] = [];
  charactersPage: Character[] = [];
  length!: number;
  pageSize!: number;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15];
  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;
  pageEvent!: PageEvent;

  constructor(private dataService: DataService){}

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  ngOnInit(){
    //this.charactersPageFromData();
    this.allCharactersFromData();
  }

  // charactersPageFromData(){
  //   this.dataService.getCharactersByPage(this.page).subscribe({
  //     next: characters => this.charactersPage = characters,
  //     error: err => console.log(err)
  //   })
  // }

  allCharactersFromData(){
    this.dataService.getAllCharacters().subscribe({
      next: characters => {
        this.characters = characters;
        this.charactersPage = [...this.characters];
      },
      error: err => console.log(err)
    })
  }
  
}
