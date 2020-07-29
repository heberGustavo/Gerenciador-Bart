import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { MenuNavbarComponent } from './menu-navbar/menu-navbar.component';
import { VendaProdutoComponent } from './venda-produto/venda-produto.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CriarClienteComponent } from './cliente/criar-cliente/criar-cliente.component';
import { CriarFuncionarioComponent } from './funcionario/criar-funcionario/criar-funcionario.component';
import { ProdutoComponent } from './produto/produto.component';
import { CriarProdutoComponent } from './produto/criar-produto/criar-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MenuSidebarComponent,
    MenuNavbarComponent,
    VendaProdutoComponent,
    FuncionarioComponent,
    ClienteComponent,
    CriarClienteComponent,
    CriarFuncionarioComponent,
    ProdutoComponent,
    CriarProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
