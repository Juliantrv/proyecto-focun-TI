import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AvailabilityComponent } from './availability/availability.component';
import { NewProductComponent } from './availability/new-product/new-product.component';
import { ProductComponent } from './availability/product/product.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'availability', component: AvailabilityComponent, 
    children: [
    {path: 'newProduct', component: NewProductComponent},
    {path: 'product', component: ProductComponent}
  ]},
  {path: 'login', component: LoginComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
