import { NotfoundComponent } from './Components/shared/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './Components/contact/contact.component';
import { DatenschutzComponent } from './Components/datenschutz/datenschutz.component';
import { HomeComponent } from './Components/home/home.component';
import { ImpressumComponent } from './Components/impressum/impressum.component';
import { SupportForForeignCompaniesComponent } from './Components/services/support-for-foreign-companies/support-for-foreign-companies.component';
import { WhatWeDoComponent } from './Components/what-we-do/what-we-do.component';
import { WasWirSindComponent } from './Components/was-wir-sind/was-wir-sind.component';
import { WhatWeDoDetailsComponent } from './Components/what-we-do-details/what-we-do-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'was-wir-sind', component: WasWirSindComponent },
  { path: 'was-wir-tun', component: WhatWeDoComponent },
  { path: 'was-wir-tun/:id', component: WhatWeDoDetailsComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'datenschutz', component: DatenschutzComponent },
  { path: 'Kontakt', component: ContactComponent },
  {
    path: 'support-for-foreign-companies',
    component: SupportForForeignCompaniesComponent,
  },
  { path: '404', component: NotfoundComponent },
  { path: '**', pathMatch: 'full', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
