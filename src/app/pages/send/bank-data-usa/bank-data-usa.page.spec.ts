import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BankDataUsaPage } from './bank-data-usa.page';

describe('BankDataUsaPage', () => {
  let component: BankDataUsaPage;
  let fixture: ComponentFixture<BankDataUsaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDataUsaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BankDataUsaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
