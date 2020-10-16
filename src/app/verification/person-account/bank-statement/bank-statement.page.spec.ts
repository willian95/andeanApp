import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankStatementPage } from './bank-statement.page';

describe('BankStatementPage', () => {
  let component: BankStatementPage;
  let fixture: ComponentFixture<BankStatementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankStatementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankStatementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
