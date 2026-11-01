import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  nome: string = '';
  mensagem: string = ''; //Mensagem exibida após o clique do usuário
  botaoDesabilitado: boolean = true;
  textoBotao: string = 'Entrar';

  onKeyUp(event: KeyboardEvent): void {
    const input = event.target as HTMLInputElement;
    this.nome = input.value.trim();
    this.botaoDesabilitado = this.nome.length === 0;
  }

 onBotaoClicado(): void {

 }
}
