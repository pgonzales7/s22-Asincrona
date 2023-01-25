import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    FormularioComponent,
    MenuComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormularioComponent,
    MenuComponent,
    LoginComponent,
    ErrorComponent,
    HomeComponent
  ]
})
export class PrincipalModule { }
