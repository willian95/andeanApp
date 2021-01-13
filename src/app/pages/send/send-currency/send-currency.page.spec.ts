import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SendCurrencyPage } from './send-currency.page';

describe('SendCurrencyPage', () => {
  let component: SendCurrencyPage;
  let fixture: ComponentFixture<SendCurrencyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendCurrencyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SendCurrencyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
