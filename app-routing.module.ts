import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutPageComponent } from './Pages/about-page/about-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { StudentCreateComponent } from './Pages/student-create/student-create.component';
import { StudentPageComponent } from './Pages/student-page/student-page.component';
import { StudentEditComponent } from './Pages/student-edit/student-edit.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'Home Page' },
  { path: 'about-us', component: AboutPageComponent, title: 'About Page' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact Page' },
  { path: 'student', component: StudentPageComponent, title: 'student lists' },
  { path: 'student/create', component: StudentCreateComponent, title: 'student create' },
  { path: 'student/:id/edit', component: StudentEditComponent, title: 'student edit' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
