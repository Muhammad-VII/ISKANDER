import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
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
import { NgxSpinnerModule } from 'ngx-spinner';
import { SharedContactComponent } from './Components/shared/shared-contact/shared-contact.component';
import { IskanderSectionComponent } from './Components/shared/iskander-section/iskander-section.component';
import { LandingComponent } from './Components/shared/landing/landing.component';
import { WasWirTunHomeComponent } from './Components/shared/was-wir-tun-home/was-wir-tun-home.component';
import { PartnershipHomeComponent } from './Components/shared/partnership-home/partnership-home.component';
import { WasWirSindPartnersComponent } from './Components/shared/was-wir-sind-partners/was-wir-sind-partners.component';

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
    SharedContactComponent,
    IskanderSectionComponent,
    LandingComponent,
    WasWirTunHomeComponent,
    PartnershipHomeComponent,
    WasWirSindPartnersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
