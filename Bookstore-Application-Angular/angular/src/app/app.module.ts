import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { OrdersComponent } from './components/orders/orders.component';
import {MaterialModule} from './material-module/material-module.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DachboardComponent } from './dachboard/dachboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { BooksdataComponent } from './components/booksdata/booksdata.component';
import { AddashboardComponent } from './admincomponents/addashboard/addashboard.component';
import { AdheaderComponent } from './admincomponents/adheader/adheader.component';
import { AdproductsComponent } from './admincomponents/adproducts/adproducts.component';
import { AdordersComponent } from './admincomponents/adorders/adorders.component';
import { AddBooksComponent } from './admincomponents/add-books/add-books.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    CartComponent,
    OrdersComponent,
    HeaderComponent,
    FooterComponent,
    DachboardComponent,
    BooksdataComponent,
    AddashboardComponent,
    AdheaderComponent,
    AdproductsComponent,
    AdordersComponent,
    AddBooksComponent,
    FavoritesComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
