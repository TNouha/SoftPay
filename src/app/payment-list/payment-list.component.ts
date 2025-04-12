import { Component } from '@angular/core';
import { PaymentService } from '../services/payment.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-payment-list',
  imports: [],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.scss'
})
export class PaymentListComponent implements OnInit {
  payments = [];
  paymentService: any;

  constructor(private SoftpayService: PaymentService) { }

  ngOnInit(): void {
    this.paymentService.getPayments().subscribe ((data: never[]) => {
      this.payments = data;
    });
  }
}