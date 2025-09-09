import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './pages/header/header';
import { Overview } from "./pages/overview/overview";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Overview],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
