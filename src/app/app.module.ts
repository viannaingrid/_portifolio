import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { WorksComponent } from './pages/works/works.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardProjectsComponent } from './shared/card-projects/card-projects.component';
import { CardSkillsComponent } from './shared/card-skills/card-skills.component';
import { CardAboutMeComponent } from './shared/card-about-me/card-about-me.component';
import { CardContactComponent } from './shared/card-contact/card-contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorksComponent,
    AboutMeComponent,
    ContactComponent,
    BannerComponent,
    CardProjectsComponent,
    CardSkillsComponent,
    CardAboutMeComponent,
    CardContactComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
