import { NotfoundComponent } from './Components/shared/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { DatenschutzComponent } from './Components/datenschutz/datenschutz.component';
import { HomeComponent } from './Components/home/home.component';
import { ImpressumComponent } from './Components/impressum/impressum.component';
import { SupportForForeignCompaniesComponent } from './Components/services/support-for-foreign-companies/support-for-foreign-companies.component';
import { WhatWeDoComponent } from './Components/what-we-do/what-we-do.component';
import { WhoWeAreComponent } from './Components/who-we-are/who-we-are.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'wer-wir-sind', component: WhatWeDoComponent },
  { path: 'wer-wir-tun', component: WhoWeAreComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'support-for-foreign-companies', component: SupportForForeignCompaniesComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
