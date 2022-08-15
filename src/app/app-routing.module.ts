import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import { InformationComponent } from "./information/information.component";
import {ProductsComponent} from "./products/products.component";
import {ProfileComponent} from "./profile/profile.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";
import {ProductInformationComponent} from "./product-information/product-information.component";
import {UsersComponent} from "./users/users.component";
import {AuthGuard} from "./auth.guard";
import {FaqComponent} from "./faq/faq.component";


const routes: Routes = [
  {path: '', redirectTo: '/information', pathMatch: 'full' },
  {path: 'information', component: InformationComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'product-info', component: ProductInformationComponent},
  {path: 'users', component: UsersComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'register', component: RegisterComponent, canActivate: [AuthGuard]  },
  {path: 'login', component: LoginComponent, canActivate: [AuthGuard]  },
  ]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
