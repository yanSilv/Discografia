import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ListaConteudoComponent } from './lista-conteudo/lista-conteudo.component';

const appRoutes: Routes = [
   {path: 'cadastroAlbum', component: CadastroComponent},
   {path: 'cadastroMusica', component: ConteudoComponent},
   {path: 'listaAlbum', component: ListaConteudoComponent},
   {path: '', redirectTo: 'cadastroAlbum', pathMatch:'full'} 
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
