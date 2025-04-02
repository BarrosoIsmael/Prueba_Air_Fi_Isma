import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact.component';
import { AirgoShowcaseComponent } from './airgo-showcase.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // Ruta principal
  { path: 'info-airfi', component: AppComponent }, // Ruta secundaria
  { path: 'contact', component: ContactComponent }, // Ruta para el formulario de contacto
  { path: 'showcase', component: AirgoShowcaseComponent } // Ruta para el componente AirgoShowcase
];