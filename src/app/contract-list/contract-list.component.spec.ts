import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SoftpayService } from '../services/softpay.service';
import { ContractListComponent } from './contract-list.component';

describe('ContractListComponent', () => {
  let component: ContractListComponent;
  let fixture: ComponentFixture<ContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display contracts', () => {
    const newLocal = 'Contract 1';
    const newLocal_1 = 'Contract 2';
    component.contracts = [
      { id: 1, name: newLocal },
      { id: 2, name: newLocal_1 }
    ];
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('ul').children.length).toBe(2);
  });
});
