import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventosComponent } from './componentes/eventos/eventos.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { PalestrantesComponent } from './componentes/palestrantes/palestrantes.component';
import { PerfilComponent } from './componentes/user/perfil/perfil.component';
import { ContatosComponent } from './componentes/contatos/contatos.component';
import { EventoListaComponent } from './componentes/eventos/evento-lista/evento-lista.component';
import { EventoDetalheComponent } from './componentes/eventos/evento-detalhe/evento-detalhe.component';
import { LoginComponent } from './componentes/user/login/login.component';
import { UserComponent } from './componentes/user/user.component';
import { RegistroComponent } from './componentes/user/registro/registro.component';

const routes: Routes = [
  {
    path: 'user', component: UserComponent,
    children:[
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent }
    ]
  },
  {
    path: 'user/perfil', component: PerfilComponent
  },
  {path: 'eventos', redirectTo: 'eventos/lista'} ,
  {
    path: 'eventos', component: EventosComponent ,
    children: [
      { path: 'detalhes/:id', component: EventoDetalheComponent },
      { path: 'detalhes', component: EventoDetalheComponent },
      { path: 'lista', component: EventoListaComponent },
    ]
  },
  {path: 'dashboard', component: DashboardComponent },
  {path: 'palestrantes', component: PalestrantesComponent },
  {path: 'contatos', component: ContatosComponent },
  {path: '', redirectTo: 'dashboard', pathMatch:'full' },
  {path: '**', redirectTo: 'dashboard', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
