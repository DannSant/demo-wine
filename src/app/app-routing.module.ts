import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ProductsComponent } from './pages/products/products.component';
import { TastingComponent } from './pages/tasting/tasting.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ScheduleComponent } from './pages/tasting/schedule.component';

const routes:Routes =[
    {path:'', component:HomeComponent},
    {path:'login', component:LoginComponent},
    {path:'signup', component:SignupComponent},
    {path:'products', component:ProductsComponent},
    {path:'tasting', component:TastingComponent},
    {path:'contact', component:ContactComponent},
    {path:'schedule', component:ScheduleComponent},
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