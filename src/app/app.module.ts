import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ParticlesModule } from 'angular-particle';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './Team/about-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { HomeViewsComponent } from './home-views/home-views.component';
import { TeamValueComponent } from './team-value/team-value.component';

@NgModule({
  declarations: [
    AppComponent,
    SingUpComponent,
    ContactUsComponent,
    ServicesComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    SignInComponent,
    OurProjectsComponent,
    HomeViewsComponent,
    TeamValueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
