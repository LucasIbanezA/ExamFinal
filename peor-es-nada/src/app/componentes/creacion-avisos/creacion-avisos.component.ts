import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AvisosServicio, Aviso } from '../../servicios/avisos.service';
import {IonLabel, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonTextarea, IonDatetime, IonButton, IonButtons, IonIcon } from '@ionic/angular/standalone'
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-creacion-avisos',
  templateUrl: './creacion-avisos.component.html',
  styleUrls: ['./creacion-avisos.component.scss'],
  standalone: true,
  imports:[NgIf,IonLabel,IonHeader,IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonTextarea, IonDatetime,IonButton,IonButtons, IonIcon,FormsModule]
})
export class CreacionAvisosComponent {
  aviso: Aviso = {
    id: '',
    titulo: '',
    descripcion: '',
    fecha: new Date().toISOString(),
    foto: '',
  };

  errores: { titulo?: string; descripcion?: string; foto?: string } = {};

  constructor(private avisosServicio: AvisosServicio, private router: Router) {}

  async guardarAviso() {
    this.errores = {}; 

    if (!this.aviso.titulo || this.aviso.titulo.length < 5) {
      this.errores.titulo = 'El título es obligatorio y debe tener al menos 5 caracteres.';
    }

    if (!this.aviso.descripcion || this.aviso.descripcion.length < 20) {
      this.errores.descripcion = 'La descripción es obligatoria y debe tener al menos 20 caracteres.';
    }

    if (!this.aviso.titulo || !this.aviso.descripcion) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    if (Object.keys(this.errores).length > 0) {
      return; 
    }

    this.aviso.id = this.generateUniqueId();
    await this.avisosServicio.guardarAviso(this.aviso);
    alert('Aviso guardado exitosamente');
    this.router.navigate(['/lista-avisos']);
  }

  async capturarFoto() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
      this.aviso.foto = image.dataUrl || '';
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }

  regresarALista() {
    this.router.navigate(['/lista-avisos']);
  }

  private generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9); 
  }
}
