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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    FooterComponent,
    EditarComponent,
    VisualizarComponent,
    CreateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
