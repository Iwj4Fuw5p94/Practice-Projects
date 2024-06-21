import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddEventComponent } from './add-event/add-event.component';
import { UpdateEventComponent } from './update-event/update-event.component';
import { DeleteEventComponent } from './delete-event/delete-event.component';
import { GetListComponent } from './get-list/get-list.component';
import { GetEventComponent } from './get-event/get-event.component';

const routes: Routes = [
  { path: 'dashboard',component:DashboardComponent},
   {path:'add-event',component:AddEventComponent},
   {path:'delete-event',component:DeleteEventComponent},
   {path:'get-list',component:GetListComponent},
   {path:'update-event',component:UpdateEventComponent},
   {path:'get-event',component:GetEventComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
