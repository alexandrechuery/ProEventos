import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  constructor(private http: HttpClient){

  }

  ngOnInit(): void{
    this.getEventos();
  }

  public eventos: any;

  public getEventos(): void  {

    this.http.get('https://localhost:5001/Eventos').subscribe(
      response => this.eventos = response,
    );

    this.http.get('https://localhost:5001/Eventos').subscribe(
      error => console.log(error)
    );

    this.eventos = [
      {
        Tema: "Angular 11",
        Local: "São Paulo"
      },
      {
        Tema: ".NET 5",
        Local: "Campinas"
      },
      {
        Tema: "Angular e suas novidades",
        Local: "Diadema"
      }
    ]

  }
}
