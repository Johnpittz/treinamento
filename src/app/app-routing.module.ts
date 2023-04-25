import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarComponent } from './paginas/criar/criar.component';
import { EditarComponent } from './paginas/editar/editar.component';
import { ExcluirComponent} from './paginas/excluir/excluir.component'



const routes: Routes = [
  {path:'criar',component:CriarComponent },
  {path:'editar',component:EditarComponent},
  {path:'excluir',component:ExcluirComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
