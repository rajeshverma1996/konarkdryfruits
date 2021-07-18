import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LocationStrategy, HashLocationStrategy,Location} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { DryFruitsComponent } from './dry-fruits/dry-fruits.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OffersComponent } from './offers/offers.component';
import { NutsComponent } from './nuts/nuts.component';
import { SpicesComponent } from './spices/spices.component';
import { ComboOfferComponent } from './combo-offer/combo-offer.component';
import { ShopComponent } from './shop/shop.component';
import { DriedFruitsComponent } from './dried-fruits/dried-fruits.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    PageNotFoundComponent,
    LoginComponent,
    DryFruitsComponent,
    ProductDetailsComponent,
    OffersComponent,
    NutsComponent,
    SpicesComponent,
    ComboOfferComponent,
    ShopComponent,
    DriedFruitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
