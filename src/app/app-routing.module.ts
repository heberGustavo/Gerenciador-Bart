import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';


const routes: Routes = [
  { path: 'clientes', component: FuncionarioComponent },
  { path: 'funcionarios', component: FuncionarioComponent },
  { path: 'home', component: HomeComponent },
  { path: '', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
