import { Component, OnInit, Output} from '@angular/core';
import { Ticket } from '../model/ticket';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  
  ticketList: Ticket[];
  @Output() selectedTicketDetail: Ticket;

  constructor(private ticketService: TicketService) { 
    
  }

  ngOnInit(): void {
    this.getTicketsList();
  }

  onTicketDetail(ticket: Ticket){
    this.selectedTicketDetail = ticket;
  }


  getTicketsList(){
    this.ticketService.getTicketsList().subscribe(data => {
      this.ticketList = data;
      this.ticketList.reverse();
    });
  }
}
