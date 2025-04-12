import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/softpay.service';

@Component({
  selector: 'app-client-list',
  imports: [],
  templateUrl: './client-list.component.html',
  styleUrl: './client-list.component.scss'
})
export class ClientListComponent  implements OnInit {
  clients = [];

  constructor(private ClientService: ClientService) { }

  ngOnInit(): void {
    this.ClientService.getClients().subscribe((data: never[]) => {
      this.clients = data;
    });
  }
}
