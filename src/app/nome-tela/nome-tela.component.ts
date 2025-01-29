import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nome-tela',
  standalone: true,
  imports: [],
  templateUrl: './nome-tela.component.html',
  styleUrl: './nome-tela.component.scss'
})
export class NomeTelaComponent {
@Input() NomeCandidato: string = '';

}
