import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  cpf: string = '';
  senha: string = ''; //Mensagem exibida após o clique do usuário
  botaoDesabilitado: boolean = true;
  textoBotao: string = 'Entrar';

  onKeyUp(campo: 'cpf' | 'senha', event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    this[campo] = input.value.trim();
    this.botaoDesabilitado = this.cpf.length === 0;
  }

 onBotaoClicado(): void {

 }
}
