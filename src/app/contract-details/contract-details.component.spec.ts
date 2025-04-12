import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractDetailsComponent } from './contract-details.component';

describe('ContractDetailsComponent', () => {
  let component: ContractDetailsComponent;
  let fixture: ComponentFixture<ContractDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should display contract details', () => {
    component.contract = { id: 1, name: 'Contract 1' };
    fixture.detectChanges();

    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('ID: 1');
    expect(compiled.querySelector('p').textContent).toContain('Nom: Contract 1');
  });
});
