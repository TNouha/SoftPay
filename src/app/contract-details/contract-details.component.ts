import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SoftpayService } from '../services/softpay.service';

@Component({
  selector: 'app-contract-details',
  imports: [],
  templateUrl: './contract-details.component.html',
  styleUrl: './contract-details.component.scss'
})
export class ContractDetailsComponent implements OnInit {
  contract: any;

  constructor(private route: ActivatedRoute, private SoftpayService: SoftpayService) { }

  ngOnInit(): void {
    const contractId = this.route.snapshot.paramMap.get('id');
    this.SoftpayService.getContracts(contractId).subscribe((data: any) => {
      this.contract = data;
    });
  }
}
