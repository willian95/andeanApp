import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFundsBankTransferPage } from './add-funds-bank-transfer.page';

describe('AddFundsBankTransferPage', () => {
  let component: AddFundsBankTransferPage;
  let fixture: ComponentFixture<AddFundsBankTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundsBankTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFundsBankTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
