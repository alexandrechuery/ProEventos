import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.css']
})
export class NavegacaoComponent implements OnInit {

  isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showMenu(): boolean{
    return this.router.url != '/user/login';
  }
}
