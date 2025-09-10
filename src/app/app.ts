import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Overview } from "./pages/overview/overview";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Overview],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
