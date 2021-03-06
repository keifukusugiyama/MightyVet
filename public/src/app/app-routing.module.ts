import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MentorshipComponent } from './mentorship/mentorship.component';
import { ResourcesComponent } from './resources/resources.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DonateComponent } from './donate/donate.component';
import { SchedulingComponent } from './scheduling/scheduling.component'
const routes: Routes = [
  {path: "", pathMatch: 'full', component: HomeComponent},
  {path: 'user/details', component: UserProfileComponent},
  {path: 'user', component: SignUpComponent},
  {path: 'login', redirectTo: 'user/details'},
  {path: 'courses', component: CoursesComponent},
  {path: 'courses/details', component: CourseDetailComponent},
  {path: 'mentorship', component: MentorshipComponent},
  {path: 'mentorship/schedule', component: SchedulingComponent},
  {path: 'resources', component: ResourcesComponent},
  {path: 'donate', component: DonateComponent},
  {path:'**', redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
