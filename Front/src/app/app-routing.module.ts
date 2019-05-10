import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonComponent } from './components/person/person.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UnitsComponent } from './components/units/units.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CareersComponent } from './components/careers/careers.component';
import { Families } from './models/families/families';
import { FamiliesComponent } from './components/families/families.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'person', component: PersonComponent},
  {path: 'units', component: UnitsComponent},
  {path: 'course', component: CoursesComponent},
  {path: 'career', component: CareersComponent},
  {path: 'families', component: FamiliesComponent},
  {path: '**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
