import { Component, OnInit } from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [{
      label: 'Discografia',
      items: [
          {label: 'Artistas', icon: 'fa fa-plus', routerLink: 'cadastroMusica'},
          {label: 'Album', icon: 'fa fa-dot-circle-o', routerLink: 'cadastroAlbum'},
          {label: 'Musica', icon: 'fa fa-music', routerLink: 'listaAlbum'}
      ]
    }];
  }

}
