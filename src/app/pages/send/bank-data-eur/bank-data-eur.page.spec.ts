import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankDataEurPage } from './bank-data-eur.page';

describe('BankDataEurPage', () => {
  let component: BankDataEurPage;
  let fixture: ComponentFixture<BankDataEurPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDataEurPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankDataEurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
