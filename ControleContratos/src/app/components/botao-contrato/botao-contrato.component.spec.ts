import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoContratoComponent } from './botao-contrato.component';

describe('BotaoContratoComponent', () => {
  let component: BotaoContratoComponent;
  let fixture: ComponentFixture<BotaoContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoContratoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
