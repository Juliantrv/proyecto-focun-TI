import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AvailabilityComponent } from './availability/availability.component';
import { HeaderComponent } from './header/header.component';
// import { CardComponent } from './availability/card/card.component';
// import { ListComponent } from './availability/list/list.component';
import { ProductComponent } from './availability/product/product.component';
import { NavComponent } from './availability/nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewProductComponent } from './availability/new-product/new-product.component';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AvailabilityComponent,
    HeaderComponent,
    NavComponent,
    NewProductComponent,
    ErrorComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    ProductService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
