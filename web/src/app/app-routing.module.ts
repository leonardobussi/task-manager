import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// tasks
import { EditarComponent } from './views/principais/editar/editar.component'
import { TasksComponent } from "./views/principais/tasks/tasks.component"
import { VisualizarComponent } from "./views/principais/visualizar/visualizar.component"
import { CreateComponent } from "./views/principais/create/create.component"

// users

import { LoginComponent } from "./views/sign/login/login.component"
import { RegisterComponent  } from "./views/sign/register/register.component"


// guarda rotas

import { AuthGuard } from "./guard/auth.guard"

// rotas
const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path: 'tasks', component: TasksComponent, canActivate: [AuthGuard]},
  {path: 'tasks/editar/:id', component: EditarComponent, canActivate: [AuthGuard]},
  {path: 'tasks/visualizar/:id', component: VisualizarComponent, canActivate: [AuthGuard]},
  {path: 'tasks/create', component: CreateComponent, canActivate: [AuthGuard]},
  {path: 'sign_in', component: LoginComponent},
  {path: 'sign_up', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
