import { Component, TemplateRef } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss']
})
export class EventoListaComponent {

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) { }

  ngOnInit(): void{
    this.spinner.show();
    this.getEventos();

  }

  modalRef?: BsModalRef;

  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];

  public larguraImagem = 150;
  public margemImagem = 2;
  public exibirImagem = false;
  private _filtroLista  = '';

  public get filtraLista() : string {
    return this._filtroLista;
  }

  public set filtraLista(filtroLista: string){
    this._filtroLista = filtroLista;
    this.eventosFiltrados = this.filtraLista ? this.filtrarEventos(this.filtraLista) :  this.eventos;
  }

  public filtrarEventos(filtraPor: string ) : Evento[] {
    filtraPor = filtraPor.toLowerCase();
    return this.eventos.filter(
      (evento: any) => evento.tema.toLocaleLowerCase().indexOf(filtraPor) !== -1
    );

  }

  public getEventos(): void  {

    this.eventoService.getEventos().subscribe({
      next: (eventos : Evento[]) => {
        this.eventos = eventos;
        this.eventosFiltrados = this.eventos;
      },
      error: (error : any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao carregar os eeventos', 'Erro!');
      },
      complete: () => {
        this.spinner.hide()
      }
    });
  }

  public alterarImagem(): void
  {
    this.exibirImagem = !this.exibirImagem;
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef?.hide();
    this.toastr.success('O evento foi deletado com sucesso.','Deletado!');
  }

  decline(): void {
    this.modalRef?.hide();
  }

  detalheEvento(id: number): void{
      this.router.navigate([`eventos/detalhes/${id}`]);
  }

}
