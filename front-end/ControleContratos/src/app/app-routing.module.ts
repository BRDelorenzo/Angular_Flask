import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarContratoComponent } from './components/adicionar-contrato/adicionar-contrato.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';

const routes: Routes = [
  {path: 'adicionar-contrato', component: AdicionarContratoComponent},
  {path: 'lista-contrato', component: ListaContratosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
