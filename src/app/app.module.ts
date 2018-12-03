import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './menu-bar/menu-bar.component';

import {MenuModule} from 'primeng/menu';
import {ButtonModule} from 'primeng/button';
import { TableModule } from 'primeng/table';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { ListaConteudoComponent } from './lista-conteudo/lista-conteudo.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ConteudoComponent,
    ListaConteudoComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    TableModule,
    ButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
