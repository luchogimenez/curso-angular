import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './security/auth/login.component';
import { RegisterUserComponent } from './security/auth/register-user.component';
import { IndexComponent } from './security/index/index.component';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { TicketListComponent } from './ticket/ticket-list.component';
import { TicketRegisterComponent } from './ticket/ticket-register/ticket-register.component';
import { TicketUpdateComponent } from './ticket/ticket-update/ticket-update.component';

const routes: Routes = [
  {path:'',component:IndexComponent},
  {path:'login',component:LoginComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'ticket-list',component:TicketListComponent},
  {path:'ticket-register',component:TicketRegisterComponent},
  {path:'ticket-update/:id',component:TicketUpdateComponent},
  {path:'ticket-detail',component:TicketDetailComponent},
  {path:'**',redirectTo:'',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
