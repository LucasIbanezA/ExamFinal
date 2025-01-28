import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatoFechaPipeService {
  transformarFecha(value: string): string {
    if (!value) {
      return 'Fecha no válida';
    }

    const date = new Date(value);
    return date.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}