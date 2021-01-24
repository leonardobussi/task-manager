import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './views/components/navbar/navbar.component';
import { TasksComponent } from './views/principais/tasks/tasks.component';
import { FooterComponent } from './views/components/footer/footer.component';
import { EditarComponent } from './views/principais/editar/editar.component';
import { VisualizarComponent } from './views/principais/visualizar/visualizar.component';
import { CreateComponent } from './views/principais/create/create.component';
import { LoginComponent } from './views/sign/login/login.component';


import { AuthGuard } from './guard/auth.guard'
import { SignService } from './services/sign.service'
import { TasksService } from './services/tasks.service';
import { RegisterComponent } from './views/sign/register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    FooterComponent,
    EditarComponent,
    VisualizarComponent,
    CreateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuard,
    SignService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
