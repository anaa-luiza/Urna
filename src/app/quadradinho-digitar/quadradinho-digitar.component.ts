import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-quadradinho-digitar',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './quadradinho-digitar.component.html',
  styleUrl: './quadradinho-digitar.component.scss'
})
export class QuadradinhoDigitarComponent {
@Output() numeroDigitado = new EventEmitter();
  numeros = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

EnviarNumero(numeroClicado: number)
{
  this.numeroDigitado.emit(numeroClicado);
}

}
