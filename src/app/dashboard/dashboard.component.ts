import { Component, OnInit } from '@angular/core';
import { PaymentService } from './services/payment.service'; 
import { ContractService } from './services/contract.service'; 

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  totalPayments: number = 0;
  totalContracts: number = 0;

  constructor(
    private paymentService: PaymentService,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    this.paymentService.getTotalPayments().subscribe(data => {
      this.totalPayments = data;
    });

    this.contractService.getTotalContracts().subscribe(data => {
      this.totalContracts = data;
    });
  }
}

  

