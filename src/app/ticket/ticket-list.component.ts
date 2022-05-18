import { Component, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from '../model/ticket';
import { TicketService } from '../service/ticket.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit {
  
  ticketList: Ticket[];
  coincidence: String ="";

  constructor(private ticketService: TicketService, private route:Router) { 
    
  }

  ngOnInit(): void {
    this.getTicketsList();
  }

  onTicketDetail(id: number){
    console.log(id);
    this.route.navigate(['/ticket-detail',id]);
  }

  getTicketsList(){
    this.ticketService.getTicketsList().subscribe(data => {
      this.ticketList = data;
      this.ticketList.reverse();
    });
  }

  getTicketListByCoincidence(){
    if(this.coincidence.length==0){
      this.getTicketsList();
    }else{
      this.ticketService.getTicketListByCoincidence(this.coincidence).subscribe(data=>{
        console.log(data);
        this.ticketList = data;
        this.ticketList.reverse();
  
      });
    }
    

  }
}
