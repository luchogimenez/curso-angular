import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket/ticket-list.component';
import { TicketItemComponent } from './ticket/ticket-item/ticket-item.component';
import { TicketDetailComponent } from './ticket/ticket-detail/ticket-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { TicketRegisterComponent } from './ticket/ticket-register/ticket-register.component';
import { TicketUpdateComponent } from './ticket/ticket-update/ticket-update.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketItemComponent,
    TicketDetailComponent,
    NavbarComponent,
    TicketRegisterComponent,
    TicketUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
