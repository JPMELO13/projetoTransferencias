import { ModificarComponent } from './componentes/modificar/modificar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './componentes/cadastrar/cadastrar.component';
import { ListarComponent } from './componentes/listar/listar.component';

const routes: Routes = [
  {path:'', component:ListarComponent},
  {path:'cadastro', component:CadastrarComponent},
  {path:'modificar/:id', component:ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
