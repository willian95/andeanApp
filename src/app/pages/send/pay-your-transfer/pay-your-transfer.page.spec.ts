import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PayYourTransferPage } from './pay-your-transfer.page';

describe('PayYourTransferPage', () => {
  let component: PayYourTransferPage;
  let fixture: ComponentFixture<PayYourTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayYourTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PayYourTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
