import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentSupportPage } from './payment-support.page';

describe('PaymentSupportPage', () => {
  let component: PaymentSupportPage;
  let fixture: ComponentFixture<PaymentSupportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentSupportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentSupportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
