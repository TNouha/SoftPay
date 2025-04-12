import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; 
import { Contract } from './models/contract.model';

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private apiUrl = 'http://localhost:8080/contracts';

  constructor(private http: HttpClient) { }

  getContracts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getContractById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Créer un contrat
  createContract(contract: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, contract);
  }

  // Mettre à jour un contrat
  updateContract(id: number, contract: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, contract);
  }

  // Supprimer un contrat
  deleteContract(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
