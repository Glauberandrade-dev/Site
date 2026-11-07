import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  exibirLogo:boolean = true;


  itensMenu = [
    { label: 'PÁGINA PRINCIPAL', link: '/menu'},
    { label: 'ADMNISTRAÇÃO', link: '/incluir' },
    { label: 'SOBRE NÓS', link: '/sobre' },
    { label: 'CARRINHO', link: '/carrinho' },
    { label: 'LOGIN E CADASTRO', link: '/login' },
 ]; 

}
1
