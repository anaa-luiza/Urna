import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuadradinhoDigitarComponent } from "./quadradinho-digitar/quadradinho-digitar.component";
import { TeclasComponent } from "./teclas/teclas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, QuadradinhoDigitarComponent, TeclasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UrnaAngular';
}
