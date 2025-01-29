import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { QuadradinhoDigitarComponent } from "./quadradinho-digitar/quadradinho-digitar.component";
import { TeclasComponent } from "./teclas/teclas.component";
import { NumeroTelaComponent } from "./numero-tela/numero-tela.component";
import { NomeTelaComponent } from "./nome-tela/nome-tela.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [QuadradinhoDigitarComponent, NumeroTelaComponent, NomeTelaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'UrnaAngular';
  primeiroNumero: string = '';
  segundoNumero: string = '';
  terceiroNumero: string = '';

CapturarNumeroDoOutput(numeroCapturado: number)
{
  debugger;
  
  if (this.primeiroNumero.length == 0)
  {
      this.primeiroNumero = numeroCapturado.toString();
      return;
  }

  if (this.segundoNumero.length == 0)
  {
    this.segundoNumero = numeroCapturado.toString ();
    return;
  }

  if (this.terceiroNumero.length == 0)
  {
    this.terceiroNumero = numeroCapturado.toString ();
  }
}

}
