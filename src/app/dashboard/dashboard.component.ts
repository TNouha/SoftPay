import { Component, OnInit } from '@angular/core'; 
import { SoftpayService } from '../services/softpay.service';
import { ContractService } from '../services/contract.service';

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
    private SoftpayService: SoftpayService,
    private contractService: ContractService
  ) {}

  ngOnInit(): void {
    this.SoftpayService.getPayments().subscribe(data => {
      this.totalPayments = data.reduce((sum, payment) => sum + payment.amount, 0);
    });

    this.contractService.getContracts().subscribe((data: number): void => {
      this.totalContracts = data;
    });
  }
}


  

