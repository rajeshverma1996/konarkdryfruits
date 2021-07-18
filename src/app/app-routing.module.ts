import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ComboOfferComponent } from './combo-offer/combo-offer.component';
import { DryFruitsComponent } from './dry-fruits/dry-fruits.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NutsComponent } from './nuts/nuts.component';
import { OffersComponent } from './offers/offers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { SpicesComponent } from './spices/spices.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductsComponent},
  
  { path: '',   redirectTo: '/dryFruits', pathMatch: 'full' },
  { path: 'dryFruits', component: DryFruitsComponent},
  { path: '',   redirectTo: '/driedFruits', pathMatch: 'full' },
  { path: 'driedFruits', component: NutsComponent},
  { path: '',   redirectTo: '/spices', pathMatch: 'full' },
  { path: 'spices', component: SpicesComponent},
 
  { path: '',   redirectTo: '/offers', pathMatch: 'full' },
  { path: 'offers', component: OffersComponent},
  { path: '',   redirectTo: '/comboOffers', pathMatch: 'full' },
  { path: 'comboOffers', component: ComboOfferComponent},
  { path: '',   redirectTo: '/shop', pathMatch: 'full' },
  { path: 'shop', component: ComboOfferComponent},
  { path: '', redirectTo: 'productDetails/:id', pathMatch: 'full' },
  { path: 'productDetails/:id', component: ProductDetailsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
    
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
