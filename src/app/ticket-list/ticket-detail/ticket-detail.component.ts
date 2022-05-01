import { Component, Input, OnInit } from '@angular/core';
import { Ticket } from 'src/app/model/ticket';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {
  @Input() ticketDetail: Ticket;

  constructor() { }

  ngOnInit(): void {
    
  }

}
