import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeViewsComponent } from './home-views/home-views.component';
import { OurProjectsComponent } from './our-projects/our-projects.component';
import { AuthGuard }   from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: HomeViewsComponent },
  { path: 'Projects', component: OurProjectsComponent, canActivate: [AuthGuard ] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
