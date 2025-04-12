import { Component, OnInit } from '@angular/core';
import { SoftpayService } from '../services/softpay.service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private SoftpayService: SoftpayService) { }

  ngOnInit(): void {
    this.user = this.SoftpayService.getUserProfile();
  }
}
