import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="parallax">
      <h1>Bienvenido a la app de contacto</h1>
      <button [routerLink]="rutaDestino">{{ textoBoton }}</button>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: [`
    .parallax {
      background-image: url('https://images.unsplash.com/photo-1506744038136-46273834b3fb');
      height: 400px;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 2rem;
      text-shadow: 2px 2px 4px #000;
      gap: 1rem;
    }

    button {
      background-color: #ffffffcc;
      color: #333;
      padding: 0.5rem 1.2rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }
  `]
})
export class AppComponent {
  textoBoton = '';
  rutaDestino = '';
  title = 'frontend';

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      const ruta = this.router.url;
      if (ruta === '/info-airfi') {
        this.textoBoton = 'contáctanos';
        this.rutaDestino = '/';
      } else {
        this.textoBoton = 'Ver info AirFi';
        this.rutaDestino = '/info-airfi';
      }
    });
  }
}
