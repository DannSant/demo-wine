import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { ContactComponent } from './pages/contact/contact.component';
import { ScheduleComponent } from './pages/tasting/schedule.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsComponent } from './pages/products/products.component';
import { TastingComponent } from './pages/tasting/tasting.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

//Modules
import { CarouselModule } from 'ngx-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    ProductsComponent,
    TastingComponent,
    NavbarComponent,
    ContactComponent,
    ScheduleComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    TimepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
