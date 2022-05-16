import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketListComponent } from './ticket/ticket-list.component';
import { TicketRegisterComponent } from './ticket/ticket-register/ticket-register.component';
import { TicketUpdateComponent } from './ticket/ticket-update/ticket-update.component';

const routes: Routes = [
  {path:'ticket-list',component:TicketListComponent},
  {path:'ticket-register',component:TicketRegisterComponent},
  {path:'',redirectTo:'ticket-list',pathMatch:'full'},
  {path:'ticket-update/:id',component:TicketUpdateComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
