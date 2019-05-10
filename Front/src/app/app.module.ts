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
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    InicioComponent,
    FamiliesComponent,
    CoursesComponent,
    CareersComponent,
    UnitsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    ReactiveFormsModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
