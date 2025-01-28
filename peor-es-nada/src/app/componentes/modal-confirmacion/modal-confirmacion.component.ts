import { Component, Input } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-confirmacion',
  templateUrl: './modal-confirmacion.component.html',
  styleUrls: ['./modal-confirmacion.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class ModalConfirmacionComponent {
  @Input() mensaje: string = '¿Estás seguro de que deseas realizar esta acción?';

  constructor(private modalCtrl: ModalController) {}

  confirmar() {
    this.modalCtrl.dismiss({ confirmado: true });
  }

  cancelar() {
    this.modalCtrl.dismiss({ confirmado: false });
  }
}
