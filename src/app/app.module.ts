import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/connexion/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AsideComponent } from './pages/aside/aside.component';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { RegisterComponent } from './pages/connexion/register/register.component';
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { OrdersComponent } from './pages/menu/orders/orders.component';
import { CustomersComponent } from './pages/menu/customers/customers.component';
import { CategoriesComponent } from './pages/menu/categories/categories.component';
import { CategorysupplierComponent } from './pages/menu/categorysupplier/categorysupplier.component';
import { ElementsComponent } from './pages/menu/elements/elements.component';
import { SupplierComponent } from './pages/menu/supplier/supplier.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipe, Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    AsideComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    WrapperComponent,
    OrdersComponent,
    CustomersComponent,
    CategoriesComponent,
    CategorysupplierComponent,
    ElementsComponent,
    SupplierComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
