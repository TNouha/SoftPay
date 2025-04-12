export interface Notification {
    id: number;
    message: string;
    date: string; 
    seen: boolean;
    clientId?: number;
  }