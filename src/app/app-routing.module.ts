import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { TaskComponent } from './Components/hometask/task/task.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { MemberComponent } from './Components/hometask/member/member.component';
import { HometaskComponent } from './Components/hometask/hometask.component';
import { ProfileComponent } from './Components/hometask/profile/profile.component';
import { SettprojectComponent } from './Components/hometask/settproject/settproject.component';
import { MetricComponent } from './Components/hometask/metric/metric.component';
import { SeetaskComponent } from './Components/hometask/seetask/seetask.component';
import { InvitationComponent } from './Components/hometask/invitation/invitation.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hometask', component: HometaskComponent,
    children: [
      {
        path: '', redirectTo: 'task', pathMatch: 'full'
      },
      {
        path: 'task', component: TaskComponent
      },
      {
        path: 'task/:id', component: TaskComponent
      },
      {
        path: 'seetask', component: SeetaskComponent
      },
      {
        path: 'member', component: MemberComponent
      },
      {
        path: 'state', component: TaskComponent
      },
      {
        path: 'profile', component: ProfileComponent
      },
      {
        path: 'metrics', component: MetricComponent
      },
      {
        path: 'setting', component: SettprojectComponent
      },
      {
        path: 'invitation', component: InvitationComponent
      }
    ]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
