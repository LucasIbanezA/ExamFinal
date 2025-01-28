import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';

export interface Aviso {
  id: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  foto?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AvisosServicio {
  private STORAGE_KEY = 'avisos';

  constructor() {}

  async obtenerAvisos(): Promise<Aviso[]> {
    const { value } = await Storage.get({ key: this.STORAGE_KEY });
    return value ? JSON.parse(value) : [];
  }

  async guardarAviso(aviso: Aviso): Promise<void> {
    const avisos = await this.obtenerAvisos();
    avisos.push(aviso);
    await Storage.set({ key: this.STORAGE_KEY, value: JSON.stringify(avisos) });
  }

  async eliminarAviso(id: string): Promise<void> {
    const avisos = await this.obtenerAvisos();
    const nuevosAvisos = avisos.filter((aviso) => aviso.id !== id);
    await Storage.set({ key: this.STORAGE_KEY, value: JSON.stringify(nuevosAvisos) });
  }
}
