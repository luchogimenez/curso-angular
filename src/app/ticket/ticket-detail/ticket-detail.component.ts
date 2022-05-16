import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ticket } from 'src/app/model/ticket';
import { TicketService } from 'src/app/service/ticket.service';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  id:number;
  ticket:Ticket;

  constructor(private route: ActivatedRoute, private ticketService: TicketService, private router: Router) { }

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

  updateTicket(ticketId:number){
    this.router.navigate(['ticket-update',ticketId]);
  }

  deleteTicket(ticketId: number){
    this.ticketService.deleteTicket(ticketId).subscribe(data=>{
      console.log(data);
      this.toTicketList();
      //window.location.reload();
    });
    
  }
  onReturn(){
    this.toTicketList();
  }

}
