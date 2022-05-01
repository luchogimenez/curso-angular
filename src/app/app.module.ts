import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { TicketItemComponent } from './ticket-list/ticket-item/ticket-item.component';
import { TicketDetailComponent } from './ticket-list/ticket-detail/ticket-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketListComponent,
    TicketItemComponent,
    TicketDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
