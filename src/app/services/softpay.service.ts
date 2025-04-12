import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contract } from '../models/contract.model';
import { SoftpayService } from '../services/softpay.service';

@Injectable({
  providedIn: 'root'
})
export class SoftpayService {
  http: any;
  getUserProfile(): any {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>('/api/payments');
  }

  getContractById(id: number): Observable<Contract> {
    return this.http.get<Contract>(`api/contracts/${id}`);
  } 
  getClients() {
    

 
}

