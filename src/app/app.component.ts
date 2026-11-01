import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgIf } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  mostrarHeader = true;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const paginasSemHeader = [
        '/login',
        '/cadastro',
        '/recuperar-senha'
      ];

      this.mostrarHeader = !paginasSemHeader.includes(event.urlAfterRedirects);

      }
    });
  }

}
