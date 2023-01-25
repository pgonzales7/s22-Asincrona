import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './can-activate.guard';
import { ErrorComponent } from './principal/error/error.component';
import { FormularioComponent } from './principal/formulario/formulario.component';
import { HomeComponent } from './principal/home/home.component';
import { LoginComponent } from './principal/login/login.component';
import { MenuComponent } from './principal/menu/menu.component';
import { ProfileComponent } from './principal/profile/profile.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [CanActivateGuard]},
  { path: "formulario", component: FormularioComponent, canActivate: [CanActivateGuard] },
  { path: "profile", component: ProfileComponent, canActivate: [CanActivateGuard] },

  { path: "login", component: LoginComponent },
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "error", component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
