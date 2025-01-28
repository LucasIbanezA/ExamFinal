import { Component, OnInit } from '@angular/core';
import { ModalController, IonicModule } from '@ionic/angular';
import { AvisosServicio, Aviso } from '../../servicios/avisos.service';
import { ModalConfirmacionComponent } from '../../componentes/modal-confirmacion/modal-confirmacion.component';
import { FormatoFechaPipeService } from '../../servicios/formato-fecha-pipe.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({  
  selector: 'app-lista-avisos',
  templateUrl: './lista-avisos.component.html',
  styleUrls: ['./lista-avisos.component.scss'],
  standalone: true,
  imports: [IonicModule,NgIf]
})
export class ListaAvisosComponent implements OnInit {
  avisos: Aviso[] = [];

  constructor(
    private avisosServicio: AvisosServicio,
    private formatoFechaPipeService: FormatoFechaPipeService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.cargarAvisos(); 
  }

  async cargarAvisos() {
    this.avisos = await this.avisosServicio.obtenerAvisos(); 
    console.log('Avisos cargados:', this.avisos); 
  }

  async eliminarAviso(id: string) {
    const modal = await this.modalCtrl.create({
      component: ModalConfirmacionComponent,
      componentProps: {
        mensaje: '¿Estás seguro de que deseas eliminar este aviso?',
      },
    });

    await modal.present();
    const { data } = await modal.onDidDismiss();

    if (data?.confirmado) {
      await this.avisosServicio.eliminarAviso(id);
      await this.cargarAvisos();
    }
  }

  redirigirACrearAviso() {
    this.router.navigate(['/creacion-avisos']);
  }
}