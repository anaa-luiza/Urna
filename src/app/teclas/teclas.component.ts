import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teclas',
  standalone: true,
  imports: [NgClass, NgFor, NgIf,],
  templateUrl: './teclas.component.html',
  styleUrl: './teclas.component.scss'
})
export class TeclasComponent {
  @Input() teclas: boolean = true;
  

}