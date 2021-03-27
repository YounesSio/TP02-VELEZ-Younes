import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { FormsModule } from '@angular/forms';
import { AdresseComponent } from './adresse/adresse.component';
import { FooterComponent } from './footer/footer.component';
import { RecupComponent } from './recup/recup.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MoteurDeRechercheComponent } from './moteur-de-recherche/moteur-de-recherche.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailComponent } from './detail/detail.component';


const appRoutes : Routes = [
  {path:'', component:AccueilComponent},
  {path:'catalogue', component:CatalogueComponent},
  {path:'formulaire', component:FormulaireComponent},
  {path:'detail/:id', component:DetailComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FormulaireComponent,
    AdresseComponent,
    FooterComponent,
    RecupComponent,
    CatalogueComponent,
    MoteurDeRechercheComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
