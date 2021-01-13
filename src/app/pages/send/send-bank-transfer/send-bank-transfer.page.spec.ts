import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendBankTransferPage } from './send-bank-transfer.page';

describe('SendBankTransferPage', () => {
  let component: SendBankTransferPage;
  let fixture: ComponentFixture<SendBankTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendBankTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendBankTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
