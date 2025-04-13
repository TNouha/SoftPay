import { Component, OnInit } from '@angular/core';
import { SoftpayService } from '../services/softpay.service';
import { ContractService } from '../services/contract.service';
import { Payment } from '../models/payment.model';
import { Contract } from '../models/contract.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalPayments: number = 0;
  totalContracts: number = 0;

  constructor(
    private SoftpayService: SoftpayService,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    this.SoftpayService.getPayments().subscribe((data: Payment[]) => {
      this.totalPayments = data.reduce((sum, payment) => sum + payment.amount, 0);
    });

    this.contractService.getContracts().subscribe((data: Contract[]) => {
      this.totalContracts = data.length;
    });
  }
}
