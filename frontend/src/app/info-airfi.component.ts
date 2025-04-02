import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-airfi',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section parallax-1">
      <h2>Parallax Estilo 1</h2>
    </div>

    <div class="text-block">
      <p>AirFi ofrece soluciones innovadoras para conectividad a bordo.</p>
    </div>

    <div class="section parallax-2">
      <h2>Parallax Estilo 2</h2>
    </div>

    <div class="text-block">
      <p>Compatible con múltiples dispositivos y altamente personalizable.</p>
    </div>

    <div class="section parallax-3">
      <h2>Parallax Estilo 3</h2>
    </div>

    <div class="text-block">
      <p>Diseñado para mejorar la experiencia digital de los pasajeros.</p>
    </div>

    <div class="section parallax-4">
      <h2>Parallax Internet</h2>
    </div>

    <div class="text-block">
      <p>La conectividad es clave en la era digital: AirFi lo hace posible incluso en vuelo.</p>
    </div>

    <div class="section parallax-5">
      <h2>Parallax Wi-Fi Global</h2>
    </div>

    
    <div class="text-block">
      <h1>Air-Go Surgery Area Manager</h1>
      <p>Bienvenido a Air-Go RTLS SAM, el sistema integral y automatizado diseñado para facilitar la gestión en 
      el bloque quirúrgico de su hospital.
      Descubra cómo nuestra avanzada tecnología de localización no solo optimiza los procesos, 
      que también mejora la seguridad y la eficiencia en cada paso.</p>
    </div>
    
    <div class="section parallax-6">
      <div class="overlay-text">
        <h2>Parallax Estilo 6</h2>
        <p>Un efecte més suau amb moviment i profunditat.</p>
      </div>
    </div>

    <div class="text-block">
      <h1>Air-Go Care</h1>
      <p>Bienvenido a Air-Go Care, la solución completa y avanzada diseñada exclusivamente para ofrecer una atención de calidad y seguridad incomparables a nuestros seres queridos en residencias de ancianos

Con Air-Go Care, estamos redefiniendo la comunicación paciente-enfermera, garantizando tranquilidad para los residentes y sus familias, y facilitando la labor de los profesionales de la salud</p>
    </div>

    <div class="parallax-7">
      <div class="overlay-text">
        <h2>Parallax Estilo 7</h2>
        <p>Amb efecte invers i opacitat gradual.</p>
      </div>
    </div>

  `,
  styleUrls: ['../styles/info-airfi.component.css']  
})
export class InfoAirfiComponent {}
