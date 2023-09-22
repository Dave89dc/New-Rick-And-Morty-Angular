import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Rick-And-Morty';
  isDarkMode: boolean = false;

  darkOrLight(){
    this.isDarkMode = !this.isDarkMode;
  }

}
