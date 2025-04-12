import { Component, OnInit } from '@angular/core';
import { ContractService } from '../services/softpay.service';
@Component({
  selector: 'app-contract-list',
  imports: [],
  templateUrl: './contract-list.component.html',
  styleUrl: './contract-list.component.scss'
})
export class ContractListComponent implements OnInit {
  contracts = [];

  constructor(private ContractService: ContractService) { }

  ngOnInit(): void {
    this.ContractService.getContracts().subscribe(data => {
      this.contracts = data;
    });
  }
}
