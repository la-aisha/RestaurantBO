import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/connexion/login/login.component';
import { RegisterComponent } from './pages/connexion/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoriesComponent } from './pages/menu/categories/categories.component';
import { CustomersComponent } from './pages/menu/customers/customers.component';
import { ElementsComponent } from './pages/menu/elements/elements.component';
import { OrdersComponent } from './pages/menu/orders/orders.component';
import { SupplierComponent } from './pages/menu/supplier/supplier.component';

const routes: Routes = [
  {
    path : "" , component : DashboardComponent
  },{
    path : "login" , component : LoginComponent
  },{
    path : "register" , component : RegisterComponent
  },{
    path : "orders", component: OrdersComponent
  },{
    path : "customers", component: CustomersComponent
  },{
    path : "suppliers", component: SupplierComponent
  },
  {
    path : "categories", component: CategoriesComponent
  },
  {
    path : "elements", component: ElementsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
