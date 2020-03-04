import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsComponent } from './pages/products/products.component';
import { TastingComponent } from './pages/tasting/tasting.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ScheduleComponent } from './pages/tasting/schedule.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { UserAdminComponent } from './pages/user-admin/user-admin.component';

const routes:Routes =[
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'products', component:ProductsComponent},
    {path:'tasting', component:TastingComponent},
    {path:'contact', component:ContactComponent},
    {path:'schedule', component:ScheduleComponent},
    {path:'cart', component:CartComponent},
    {path:'checkout', component:CheckoutComponent},
    {path:'users', component:UserAdminComponent},
] 

@NgModule({
    imports:[
        RouterModule.forRoot(routes),
    ],
    exports:[
        RouterModule
    ]

})
export class AppRoutingModule{}