import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'secondproject/app/components/home/home.component';
import { LoginComponent } from './login/login.component';
import { RagistrationformComponent } from './ragistrationform/ragistrationform.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { IncomeComponent } from './income/income.component';

const routes: Routes = [
  {path: 'sidenavbar', component: SideNavComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'ragistrationform',component:RagistrationformComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:'',component:IncomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
  exports: [RouterModule]
})
export class AppRoutingModule { 
  }
