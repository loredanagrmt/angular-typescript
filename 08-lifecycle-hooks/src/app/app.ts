import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AboutPage } from "./pages/about-page/about-page";
import { Navbar } from "./components/navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AboutPage, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('08-lifecycle-hooks');
}
