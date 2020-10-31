import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddFundsTermPage } from './add-funds-term.page';

describe('AddFundsTermPage', () => {
  let component: AddFundsTermPage;
  let fixture: ComponentFixture<AddFundsTermPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFundsTermPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddFundsTermPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
