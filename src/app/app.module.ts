import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './Components/shared/nav/nav.component';
import { FooterComponent } from './Components/shared/footer/footer.component';
import { WhatWeDoComponent } from './Components/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';
import { ImpressumComponent } from './Components/impressum/impressum.component';
import { DatenschutzComponent } from './Components/datenschutz/datenschutz.component';
import { ContactComponent } from './Components/contact/contact.component';
import { SupportForForeignCompaniesComponent } from './Components/services/support-for-foreign-companies/support-for-foreign-companies.component';
import { HomeComponent } from './Components/home/home.component';
import { NotfoundComponent } from './Components/shared/notfound/notfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { WhatWeDoDetailsComponent } from './Components/what-we-do-details/what-we-do-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    WhatWeDoComponent,
    WhoWeAreComponent,
    ImpressumComponent,
    DatenschutzComponent,
    ContactComponent,
    SupportForForeignCompaniesComponent,
    NotfoundComponent,
    WhatWeDoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
