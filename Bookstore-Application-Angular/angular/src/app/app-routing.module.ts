import { FavoritesComponent } from './components/favorites/favorites.component';
import { CartComponent } from './components/cart/cart.component';
import { AdordersComponent } from './admincomponents/adorders/adorders.component';
import { AddashboardComponent } from './admincomponents/addashboard/addashboard.component';
import { BooksdataComponent } from './components/booksdata/booksdata.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AdproductsComponent } from './admincomponents/adproducts/adproducts.component';
import { AddBooksComponent } from './admincomponents/add-books/add-books.component';
const routes: Routes = [
  {path:''  , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'booksdata',component:BooksdataComponent},
  {path:'adminhome',component:AddashboardComponent},
  {path:'adminproducts',component:AddBooksComponent},
  {path:'adminorders',component:AdordersComponent},
  {path:'cart',component:CartComponent},
  {path:'favorites',component:FavoritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
