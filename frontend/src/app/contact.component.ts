import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService, Contacto } from './contact.service';
import { AirgoShowcaseComponent } from './airgo-showcase.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, AirgoShowcaseComponent],
  providers: [ContactService],
  template: `
    <div *ngIf="exito" class="success">¡Mensaje enviado correctamente!</div>

    <app-airgo-showcase></app-airgo-showcase>

    <h2 style="text-align: center; margin-top: 2rem;">Formulario de Contacto</h2>
    <form (ngSubmit)="enviar()" #contactForm="ngForm">
      <label>
        Nombre:
        <input type="text" [(ngModel)]="contacto.nombre" name="nombre" required>
      </label>
      <label>
        Email:
        <input type="email" [(ngModel)]="contacto.email" name="email" required>
      </label>
      <label>
        Mensaje:
        <textarea [(ngModel)]="contacto.mensaje" name="mensaje" required></textarea>
      </label>
      <button type="submit" [disabled]="!contactForm.form.valid">Enviar</button>
    </form>

    <div *ngIf="error" class="error">Hubo un problema al enviar el mensaje.</div>
  `,
  styleUrls: ['../styles/contact.component.css']
})
export class ContactComponent {
  contacto: Contacto = {
    nombre: '',
    email: '',
    mensaje: ''
  };

  exito = false;
  error = false;

  constructor(private contactService: ContactService) {}

  enviar() {
    this.contactService.enviarMensaje(this.contacto).subscribe({
      next: () => {
        this.exito = true;
        this.error = false;
        this.contacto = { nombre: '', email: '', mensaje: '' };

        setTimeout(() => this.exito = false, 5000);
      },
      error: () => {
        this.error = true;
        setTimeout(() => this.error = false, 5000);
      }
    });
  }
}
