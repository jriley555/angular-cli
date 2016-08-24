import { Component } from '@angular/core';
import { BooksComponent } from './books';

@Component({
  moduleId: module.id,
  selector: 'jjr-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [BooksComponent]
})

export class AppComponent {
  title = 'app works!';
}
