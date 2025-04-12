export interface Contract {
    id: number;
    startDate: string;  
    endDate: string;   
    amountTotal: number;
    clientId: number;
    status: 'actif' | 'expiré' | 'résilié';
  }
  