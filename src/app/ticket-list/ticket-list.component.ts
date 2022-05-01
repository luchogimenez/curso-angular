import { Component, OnInit, Output} from '@angular/core';
import { Ticket } from '../model/ticket';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  ticketList: Ticket[];
  @Output() selectedTicketDetail: Ticket;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.ticketList =[{
      "description":"Reemplazar tablillas",  
      "customerName":"Facundo",
      "customerAddress":"Tosso 2163",
      "budget":20000,
      "technical":"Luis"
    },
    {
      "description":"Reparar motor",  
      "customerName":"José",
      "customerAddress":"San Luis 462",
      "budget":40000,
      "technical":"Matias"
    },
    {
      "description":"Cortina nueva",  
      "customerName":"Maria",
      "customerAddress":"Washington 1430",
      "budget":150000,
      "technical":"Taller"
    }];
  }

  onTicketDetail(ticket: Ticket){
    this.selectedTicketDetail = ticket;
  }

}
