import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelezionaInsegnamentoModalPage } from './seleziona-insegnamento-modal.page';

describe('SelezionaInsegnamentoModalPage', () => {
  let component: SelezionaInsegnamentoModalPage;
  let fixture: ComponentFixture<SelezionaInsegnamentoModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelezionaInsegnamentoModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
