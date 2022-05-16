import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket-update',
  templateUrl: './ticket-update.component.html',
  styleUrls: ['./ticket-update.component.css']
})
export class TicketUpdateComponent implements OnInit {

  id:number;
  ticket:Ticket;
  tittle: String = "Editar Ticket";

  constructor( private route: ActivatedRoute, private router:Router, private ticketService: TicketService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ticket = new Ticket();
    this.ticketService.getTicketById(this.id).subscribe(data => {
      this.ticket = data;
    })
  }
  toTicketList(){
    this.router.navigate(['/ticket-list']);
    // swal('Empleado actualizado',`El empleado ${this.ticket.customerName} ha sido actualizado con exito`,`success`);
  }
  onSubmit(ticket: Ticket){
    console.log(this.id,ticket);
    this.ticketService.updateTicket(this.id,ticket).subscribe(dato => {
      this.toTicketList();
    },error => console.log(error));
  }

  onCancel(){
    this.toTicketList();
  }
}
