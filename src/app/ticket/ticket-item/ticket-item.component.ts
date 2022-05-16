import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';

@Component({
  selector: 'app-ticket-item',
  templateUrl: './ticket-item.component.html',
  styleUrls: ['./ticket-item.component.css']
})
export class TicketItemComponent implements OnInit {

  @Input('ticket') ticket:Ticket;
  @Output() ticketCreated = new EventEmitter<Ticket>();

  constructor() { }

  ngOnInit(): void {
  }

  onTicketDetails(ticket: Ticket) {
    this.ticketCreated.emit(ticket);
  }
}
