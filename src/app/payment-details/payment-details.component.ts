import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoftpayService } from '../services/softpay.service';

@Component({
  selector: 'app-payment-details',
  imports: [],
  templateUrl: './payment-details.component.html',
  styleUrl: './payment-details.component.scss'
})
export class PaymentDetailsComponent implements OnInit {
  payment: any;

  constructor(private route: ActivatedRoute, private SoftpayService: SoftpayService) { }

  ngOnInit(): void {
    const paymentId = this.route.snapshot.paramMap.get('id');
    this.SoftpayService.getPayments(paymentId).subscribe(data => {
      this.payment = data;
    });
  }
}