import { Component } from '@angular/core';

@Component({
  selector: 'app-teclado',
  templateUrl: './teclado.component.html',
  styleUrls: ['./teclado.component.scss']
})
export class TecladoComponent {
  public resultado: string = "";

  clicar(valor: string) {
    if (valor === 'CE') {
      this.limpar();
    } else if (valor === '=') {
      this.finalizar();
    } else {
      this.resultado += valor;
    }
  }

  limpar() {
    this.resultado = "";
  }

  finalizar() {
    try {
      this.resultado = eval(this.resultado);
    } catch (e) {
      this.resultado = "Erro";
    }
  }
}