import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-airgo-showcase',
  standalone: true,
  imports: [CommonModule],
  template: `
    
    <section class="features">
      <div class="feature" *ngFor="let feature of features">
        <img [src]="feature.icon" alt="icono" />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <a href="#">Aprender más →</a>
      </div>
    </section>

    <section class="features">
      <div class="feature" *ngFor="let feature of features">
        <img [src]="feature.icon" alt="icono" />
        <h3>{{ feature.title }}</h3>
        <p>{{ feature.description }}</p>
        <a href="#">Aprender más →</a>
      </div>
    </section>

    <div class="cta-container">
      <button class="cta" (click)="mostrarAlerta()">Saber más de Air-Go Care</button>
    </div>
  `,
  styleUrls: ['../styles/airgo-showcase.component.css']
})
export class AirgoShowcaseComponent {
  features = [
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/10718/10718794.png',
      title: 'Detección de Caídas',
      description: 'Detecta caídas automáticamente gracias a sensores avanzados.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/10440/10440320.png',
      title: 'Geolocalización Precisa',
      description: 'Sigue la ubicación de los residentes en tiempo real.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/10192/10192274.png',
      title: 'Alertas Instantáneas',
      description: 'Notificaciones inmediatas por Bluetooth y dispositivos de seguridad.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/2942/2942815.png',
      title: 'Llamadas de Voz IP Fácil',
      description: 'Llamadas rápidas y eficaces con un solo clic.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/10423/10423934.png',
      title: 'Control de Errantes',
      description: 'Supervisa y protege a residentes con tendencia a deambular.'
    },
    {
      icon: 'https://cdn-icons-png.flaticon.com/128/3652/3652191.png',
      title: 'Integrable con 3ª partes',
      description: 'Compatible con apps externas para una gestión completa.'
    }
  ];

  mostrarAlerta() {
    Swal.fire({
      icon: 'info',
      title: '¡AÚN NO DISPONIBLE!',
      text: 'Esta sección estará disponible próximamente.',
      confirmButtonText: 'Entendido'
    });
  }
  
  
}
