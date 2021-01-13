import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankDataColPage } from './bank-data-col.page';

describe('BankDataColPage', () => {
  let component: BankDataColPage;
  let fixture: ComponentFixture<BankDataColPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDataColPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankDataColPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
