import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftpayService } from '../services/softpay.service';
import { PaymentDetailsComponent } from './payment-details.component';

describe('PaymentDetailsComponent', () => {
  let component: PaymentDetailsComponent;
  let fixture: ComponentFixture<PaymentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaymentDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display payment details', () => {
    component.payment = { id: 1, amount: 100, status: 'Paid' };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('ID: 1');
    expect(compiled.querySelector('p').textContent).toContain('Montant: 100€');
  });
});
