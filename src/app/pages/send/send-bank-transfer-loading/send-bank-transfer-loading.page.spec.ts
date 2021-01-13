import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendBankTransferLoadingPage } from './send-bank-transfer-loading.page';

describe('SendBankTransferLoadingPage', () => {
  let component: SendBankTransferLoadingPage;
  let fixture: ComponentFixture<SendBankTransferLoadingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendBankTransferLoadingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendBankTransferLoadingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
