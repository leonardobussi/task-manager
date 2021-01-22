import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditarComponent } from './principais/editar/editar.component'
import { TasksComponent } from "./principais/tasks/tasks.component"
import { VisualizarComponent } from "./principais/visualizar/visualizar.component"
import { CreateComponent } from "./principais/create/create.component"

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: TasksComponent},
  {path: 'tasks/editar/:id', component: EditarComponent},
  {path: 'tasks/visualizar/:id', component: VisualizarComponent},
  {path: 'tasks/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
