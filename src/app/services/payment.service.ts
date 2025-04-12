import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../../models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = 'http://localhost:8080/payments';  
  constructor(private http: HttpClient) {}

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>('/api/payments');
  }

  getPaymentById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  createPayment(payment: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, payment);
  }

  updatePayment(id: number, payment: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, payment);
  }

  deletePayment(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
