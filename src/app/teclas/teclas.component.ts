import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-teclas',
  standalone: true,
  imports: [NgClass, NgFor, NgIf,],
  templateUrl: './teclas.component.html',
  styleUrl: './teclas.component.scss' 
})
export class TeclasComponent {
@Output() BotaoCorrigir = new EventEmitter();
  @Input() teclas: boolean = true;
  
  public Confirmar() {
    throw new Error('Method not implemented.');
    }
    public Corrigir() {
    this.BotaoCorrigir.emit();
    }
    public Branco() {
    throw new Error('Method not implemented.');
    }
}