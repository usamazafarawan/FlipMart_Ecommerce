import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './component/cart/cart.component';
import { AuthGuard } from './core/guards/auth.guard';
import { HomeComponent } from './component/home/home.component';
import { InfoComponent } from './component/info/info.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    // component: AppComponent
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[AuthGuard]
  } ,
  // { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent
  } ,
  {
    path: 'signup',
    component: SignupComponent
  },
  {path:'cart', component: CartComponent},
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'info/:id',
    component: InfoComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
