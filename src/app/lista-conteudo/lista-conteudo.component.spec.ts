import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaConteudoComponent } from './lista-conteudo.component';

describe('ListaConteudoComponent', () => {
  let component: ListaConteudoComponent;
  let fixture: ComponentFixture<ListaConteudoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaConteudoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaConteudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
