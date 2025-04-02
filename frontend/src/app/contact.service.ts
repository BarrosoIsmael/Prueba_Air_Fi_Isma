import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Contacto {
  nombre: string;
  email: string;
  mensaje: string;
}

@Injectable()
export class ContactService {
  private apiUrl = 'http://localhost:3000/api/contact';

  constructor(private http: HttpClient) {}

  enviarMensaje(contacto: Contacto): Observable<any> {
    const body = {
      name: contacto.nombre,
      email: contacto.email,
      message: contacto.mensaje
    };

    return this.http.post(this.apiUrl, body);
  }
}
