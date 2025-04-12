export interface Payment {
    id: number;
    amount: number;
    date: string; // ou Date si tu préfères
    mode: 'comptant' | 'en tranches';
    status: 'payé' | 'en attente' | 'en retard';
    clientId: number;
    contractId: number;
  }