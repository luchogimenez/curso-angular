import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private baseUrl = "http://localhost:8080/api/v1/ticket";

  constructor(private httpClient: HttpClient) { }

  getTicketsList():Observable<Ticket[]>{
    return this.httpClient.get<Ticket[]>(`${this.baseUrl}`);
  }

  createTickets(ticket: Ticket):Observable<Ticket>{
    return this.httpClient.post<Ticket>(`${this.baseUrl}`,ticket);
  }

  getTicketById(ticketId:number):Observable<Ticket>{
    return this.httpClient.get<Ticket>(`${this.baseUrl}/${ticketId}`);
  }

  updateTicket(id:number,ticket:Ticket):Observable<Object>{
    console.log(`${this.baseUrl}/${id}`,ticket);
    return this.httpClient.put(`${this.baseUrl}/${id}`,ticket);
  }

  deleteTicket(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
