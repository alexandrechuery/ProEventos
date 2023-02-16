import * as core from '@angular/core';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Evento } from 'src/app/models/Evento';
import { EventoService } from 'src/app/services/evento.service'
'../services/evento.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@core.Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit{
  ngOnInit(): void{
    
  }
}
