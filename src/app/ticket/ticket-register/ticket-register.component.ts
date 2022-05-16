import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket-register',
  templateUrl: './ticket-register.component.html',
  styleUrls: ['./ticket-register.component.css']
})
export class TicketRegisterComponent implements OnInit {

  ticket: Ticket = new Ticket();

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
  }

  createTicket() {
    console.log(this.ticket);
      this.ticketService.createTickets(this.ticket).subscribe(data => {
        console.log(data);
        this.redirectToTicketList();
    },error=>console.log(error));
  }

  onSubmit() {
    console.log(this.ticket);
    this.createTicket();
  }
  
  redirectToTicketList(){
    this.router.navigate(['/ticket-list']);
  }

  onCancel(){
    this.redirectToTicketList();
  }
}
