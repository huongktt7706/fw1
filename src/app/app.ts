import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [],
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
})
export class App {
  "name":"NGuye Van A"
  "age":19
}