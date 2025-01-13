import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quadradinho-digitar',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './quadradinho-digitar.component.html',
  styleUrl: './quadradinho-digitar.component.scss'
})
export class QuadradinhoDigitarComponent {
  @Input() quadradinhodigitar: number[]= []
  numeros: number[] [] = 
  [
  [9, 8, 7,],
  [6, 5, 4,],
  [3, 2, 1],
    [0 ]

  ];

}
