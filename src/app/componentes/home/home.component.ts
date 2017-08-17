import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

declare var $;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    videosCargados: any[] = [];
    videoSeleccionado: any;


  constructor(public _ytbSRV: YoutubeService) {
      this._ytbSRV.cargarLista().subscribe( videos => this.videosCargados= videos);
  }

  ngOnInit() {
  }

  verVideo(video: any){
      this.videoSeleccionado = video;
      console.log(this.videoSeleccionado);
      console.log('se debe visualizar el video ' + video.title);
  }

  cerrarModal(){
      console.log('Se debe de cerrar el modal');
      this.videoSeleccionado = null;
      $('#modalVideoSeleccionado').modal('hide');
  }

  cargarMasVideos(){
      this._ytbSRV.cargarLista().subscribe( videos => this.videosCargados.push.apply(this.videosCargados, videos));
  }

}
