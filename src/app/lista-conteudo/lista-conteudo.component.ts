import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-conteudo',
  templateUrl: './lista-conteudo.component.html',
  styleUrls: ['./lista-conteudo.component.css']
})
export class ListaConteudoComponent implements OnInit {

  cols: any[];
  documents: any[];
  constructor() { }

  ngOnInit() {
    this.cols = [
      { field: 'album', header: 'ALbum' },    
      { field: 'artista', header: 'Artista' },
      { field: 'ano', header: 'Ano' }
    ];

    this.documents=[{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    },{
      "album":"Jhon",
      "artista":"1994",
      "ano":"20"
    }];
  }

}
