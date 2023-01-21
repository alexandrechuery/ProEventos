import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.getEventos();
  }

  public eventos: any = [];
  public eventosFiltrados: any = [];

  larguraImagem: number = 150;
  margemImagem: number = 2;
  exibirImagem = false;
  private _filtroLista : string = '';

  public get filtraLista() : string {
    return this._filtroLista;
  }

  public set filtraLista(filtroLista: string){
    this._filtroLista = filtroLista;
    this.eventosFiltrados = this.filtraLista ? this.filtrarEventos(this.filtraLista) :  this.eventos;
  }

  filtrarEventos(filtraPor: string ) : any {
    filtraPor = filtraPor.toLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtraPor) !== -1
    )

  }

  public getEventos(): void  {

    this.http.get('https://localhost:5001/Eventos').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      }
    );

    this.http.get('https://localhost:5001/Eventos').subscribe(
      error => console.log(error)
    );
  }

  alterarImagem()
  {
    this.exibirImagem = !this.exibirImagem;
  };

}
