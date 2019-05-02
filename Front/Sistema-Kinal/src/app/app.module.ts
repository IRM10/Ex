import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './components/person/person.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { FamiliesComponent } from './components/families/families.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CareersComponent } from './components/careers/careers.component';
import { UnitsComponent } from './components/units/units.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    InicioComponent,
    FamiliesComponent,
    CoursesComponent,
    CareersComponent,
    UnitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
