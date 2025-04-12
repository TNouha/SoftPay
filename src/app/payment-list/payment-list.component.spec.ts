import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftpayService } from '../services/softpay.service';
import { PaymentListComponent } from './payment-list.component';

describe('PaymentListComponent', () => {
  let component: PaymentListComponent;
  let fixture: ComponentFixture<PaymentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display payments', () => {
    component.payments = [
      payments: Payment[] = [];
      { id: 1, amount: 100, status: 'Paid' },
      { id: 2, amount: 200, status: 'Pending' }
    ];

    fixture.detectChanges(); 

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ul').children.length).toBe(2); 
  });
});
